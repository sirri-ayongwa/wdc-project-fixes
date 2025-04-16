import React, { useState } from 'react';
import { File, Upload, X, Check, Loader2 } from "lucide-react";
import { DocumentRequirement, DocumentData } from '../../types/roaster';
import GeminiService from '../../service/gemini';

// Add type declarations for environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GEMINI_API_KEY: string;
    }
  }
  
  interface ImportMetaEnv {
    VITE_GEMINI_API_KEY: string;
    [key: string]: string | undefined;
  }
}

// Initialize the Gemini service with your API key
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const geminiService = new GeminiService(apiKey);

interface DocumentUploadProps {
  requirement: DocumentRequirement;
  documentData: DocumentData | undefined;
  onUpload: (docId: string, file: File, extractedData?: Record<string, string>) => void;
  onRemove: (docId: string) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ 
  requirement, 
  documentData,
  onUpload, 
  onRemove 
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [processingStatus, setProcessingStatus] = useState<'idle' | 'uploading' | 'extracting' | 'success' | 'error'>('idle');
  const [extractionError, setExtractionError] = useState<string | null>(null);
  
  // Log API key on component mount (for debugging only, remove in production)
  React.useEffect(() => {
    if (!apiKey || apiKey.trim() === '') {
      console.warn("Missing Gemini API key. Document extraction will likely fail.");
    } else {
      console.log("Gemini API key is configured");
    }
  }, []);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
      // Reset the input value to allow uploading the same file again if needed
      e.target.value = '';
    }
  };

  const handleFileUpload = async (file: File) => {
    // Check if file is PDF or image
    if (!file.type.match('application/pdf|image/jpeg|image/png|image/jpg')) {
      showToast("Invalid file type", "Please upload a PDF or image file (JPEG, PNG)", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast("File too large", "Please upload a file smaller than 5MB", "error");
      return;
    }

    try {
      setProcessingStatus('uploading');
      setExtractionError(null);
      
      // First, generate preview (for display purposes)
      const preview = await readFileAsDataURL(file);
      
      // Update the document in UI to show it's being processed
      onUpload(requirement.id, file);
      
      // Start AI extraction process
      setProcessingStatus('extracting');
      
      // Log that we're starting extraction
      console.log(`Starting extraction for ${requirement.id} using Gemini API`);
      
      // Call Gemini API to extract data from the document
      const extractionResult = await geminiService.extractDocumentData(file, requirement.id);
      
      if (!extractionResult.success || !extractionResult.extractedData) {
        setProcessingStatus('error');
        const errorMsg = extractionResult.error || "Unknown error occurred during extraction";
        setExtractionError(errorMsg);
        showToast("Extraction Failed", errorMsg, "error");
        return;
      }
      
      // Update document with extracted data
      onUpload(requirement.id, file, extractionResult.extractedData);
      setProcessingStatus('success');
      showToast(
        "Data Extracted Successfully",
        `We've extracted the information from your ${requirement.name}.`,
        "success"
      );
      
    } catch (error: any) {
      console.error("Error in file processing:", error);
      setProcessingStatus('error');
      const errorMessage = error.message || "An unexpected error occurred. Please try again.";
      setExtractionError(errorMessage);
      showToast("Processing Error", errorMessage, "error");
    }
  };
  
  // Helper function to read file as data URL for preview
  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  // Simple toast function 
  const showToast = (title: string, message: string, type: 'success' | 'error') => {
    const event = new CustomEvent('show-toast', {
      detail: { title, description: message, variant: type }
    });
    window.document.dispatchEvent(event);
  };

  const handleRemoveFile = () => {
    onRemove(requirement.id);
    setProcessingStatus('idle');
    setExtractionError(null);
  };

  // Use document status or local processing status
  const isUploaded = !!documentData?.file;
  const isProcessing = processingStatus === 'uploading' || processingStatus === 'extracting';
  const isExtracted = documentData?.status === 'extracted' || processingStatus === 'success';
  const isError = documentData?.status === 'error' || processingStatus === 'error';

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 pb-3 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">{requirement.name}</h3>
          {requirement.required && (
            <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">Required</span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">{requirement.description}</p>
      </div>
      
      <div>
        {!isUploaded ? (
          <div
            className="border-t p-6 cursor-pointer bg-gray-50 text-black hover:bg-gray-100 transition-colors duration-150 flex flex-col items-center justify-center text-center"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
            <Upload className="h-8 w-8 mb-2 text-gray-400" />
            <p className="text-sm font-medium mb-1">Drop file here or click to upload</p>
            <p className="text-xs text-gray-500">PDF or images (max 5MB)</p>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <File className="h-8 w-8 text-brand-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium truncate max-w-[180px]">
                    {documentData?.file?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {((documentData?.file?.size ?? 0) / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {isProcessing && (
                  <div className="flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin text-brand-600 mr-2" />
                    <span className="text-xs text-brand-600">
                      {processingStatus === 'uploading' ? 'Uploading...' : 'AI Extracting...'}
                    </span>
                  </div>
                )}
                {isExtracted && <Check className="h-4 w-4 text-green-600" />}
                {isError && <X className="h-4 w-4 text-red-600" />}
                <button
                  className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                  onClick={handleRemoveFile}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {documentData?.preview && (
              <div className="mt-4 border rounded-md overflow-hidden">
                {documentData.file?.type === 'application/pdf' ? (
                  <div className="flex items-center justify-center bg-gray-100 h-20">
                    <p className="text-xs text-gray-500">PDF Preview</p>
                  </div>
                ) : (
                  <img 
                    src={documentData.preview} 
                    alt="Document preview" 
                    className="object-cover w-full h-32" 
                  />
                )}
              </div>
            )}
            
            {isExtracted && documentData?.extractedData && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-brand-600 mb-2">
                  AI Extracted Information
                </p>
                <div className="bg-gray-100 text-black rounded p-2.5 text-xs">
                  {Object.entries(documentData.extractedData).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-2 py-1">
                      <span className="text-gray-500">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {isError && (
              <div className="mt-3">
                <p className="text-xs text-red-600">
                  {extractionError || "Error extracting data. Please try uploading again."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;