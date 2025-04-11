import React from 'react';
import { File, Upload, X, Check, Loader2 } from "lucide-react";
import { DocumentRequirement, DocumentData } from '../../types/roaster';

interface DocumentUploadProps {
  requirement: DocumentRequirement;
  document: DocumentData | undefined;
  onUpload: (docId: string, file: File) => void;
  onRemove: (docId: string) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ 
  requirement, 
  document, 
  onUpload, 
  onRemove 
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
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

  const handleFileUpload = (file: File) => {
    // Check if file is PDF or image
    if (!file.type.match('application/pdf|image/jpeg|image/png|image/jpg')) {
      showToast("Invalid file type", "Please upload a PDF or image file (JPEG, PNG)", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast("File too large", "Please upload a file smaller than 5MB", "error");
      return;
    }

    onUpload(requirement.id, file);
  };

  // Simple toast function to replace shadcn toast
  const showToast = (title: string, message: string, type: 'success' | 'error') => {
    // Here you would implement your own toast notification
    // This is a simple example that you would replace with your preferred method
    alert(`${title}: ${message}`);
  };

  const handleRemoveFile = () => {
    onRemove(requirement.id);
  };

  const isUploaded = !!document?.file;
  const isProcessing = document?.status === 'processing';
  const isExtracted = document?.status === 'extracted';
  const isError = document?.status === 'error';

  return (
    <div className=" border rounded-lg shadow-sm overflow-hidden">
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
                    {document?.file?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {((document?.file?.size ?? 0) / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {isProcessing && <Loader2 className="h-4 w-4 animate-spin text-brand-600" />}
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
            
            {document?.preview && (
              <div className="mt-4 border rounded-md overflow-hidden">
                {document.file?.type === 'application/pdf' ? (
                  <div className="flex items-center justify-center bg-gray-100 h-20">
                    <p className="text-xs text-gray-500">PDF Preview</p>
                  </div>
                ) : (
                  <img 
                    src={document.preview} 
                    alt="Document preview" 
                    className="object-cover w-full h-32" 
                  />
                )}
              </div>
            )}
            
            {isExtracted && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-brand-600 mb-2">
                  Extracted Information
                </p>
                <div className="bg-gray-100 text-black rounded p-2.5 text-xs">
                  {document?.extractedData && Object.entries(document.extractedData).map(([key, value]) => (
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
                  Error extracting data. Please try uploading again.
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