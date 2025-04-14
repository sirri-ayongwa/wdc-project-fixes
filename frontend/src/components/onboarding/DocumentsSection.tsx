import React from 'react';
import DocumentUpload from './DocumentUpload';
import { documentRequirements, RosterType, DocumentData } from '../../types/roaster';

interface DocumentsSectionProps {
  rosterType: RosterType;
  documents: DocumentData[];
  onDocumentsChange: (documents: DocumentData[]) => void;
}

// Simple toast event system
export const showToast = (title: string, description: string, variant: 'success' | 'error' = 'success') => {
  // Create custom event
  const event = new CustomEvent('show-toast', {
    detail: { title, description, variant }
  });
  window.document.dispatchEvent(event);
};

const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  rosterType,
  documents,
  onDocumentsChange,
}) => {
  const requirements = documentRequirements[rosterType];

  const handleUpload = (docId: string, file: File, extractedData?: Record<string, string>) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const preview = fileReader.result as string;
      
      // Find if document already exists in the array
      const existingDocIndex = documents.findIndex(doc => doc.id === docId);
      
      // Create new document object
      const newDoc: DocumentData = {
        id: docId,
        name: requirements.find(r => r.id === docId)?.name || "Document",
        file: file,
        preview,
        extractedData: extractedData || null,
        status: extractedData ? "extracted" : "processing"
      };
      
      // Update documents array
      let newDocuments: DocumentData[];
      if (existingDocIndex >= 0) {
        newDocuments = [...documents];
        newDocuments[existingDocIndex] = newDoc;
      } else {
        newDocuments = [...documents, newDoc];
      }
      
      onDocumentsChange(newDocuments);
      
      // If AI didn't extract data yet, we'll show a processing state
      if (!extractedData) {
        // This is for backward compatibility with your existing code
        // In the updated flow, AI extraction happens in DocumentUpload component
      }
    };
    
    fileReader.readAsDataURL(file);
  };

  const handleRemove = (docId: string) => {
    const newDocuments = documents.filter(doc => doc.id !== docId);
    onDocumentsChange(newDocuments);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-brand-950">Upload Required Documents</h2>
        <p className="text-gray-500 mt-2">
          Our AI will automatically extract information from your documents
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((requirement) => (
          <DocumentUpload
            key={requirement.id}
            requirement={requirement}
            documentData={documents.find(doc => doc.id === requirement.id)} // Changed from 'document' to 'documentData'
            onUpload={handleUpload}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentsSection;