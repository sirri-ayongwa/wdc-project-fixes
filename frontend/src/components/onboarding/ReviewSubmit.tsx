import React from 'react';
import { DocumentData, RosterType } from '../../types/roaster';
import { Check } from 'lucide-react';

interface ReviewSubmitProps {
  rosterType: RosterType;
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  documents: DocumentData[];
}

const ReviewSubmit: React.FC<ReviewSubmitProps> = ({ rosterType, data, documents }) => {
  const rosterTypeLabels = {
    individual: "Individual",
    company: "Company",
    organization: "Organization"
  };

  const extractedFields = documents
    .filter(doc => doc.extractedData)
    .flatMap(doc => {
      if (!doc.extractedData) return [];
      return Object.entries(doc.extractedData).map(([key, value]) => ({
        label: key,
        value,
        source: doc.name
      }));
    });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-brand-950">Review Your Application</h2>
        <p className="text-muted-foreground mt-2">
          Please review all information before submitting
        </p>
      </div>

      <div className="space-y-4">
        {/* Registration Type Section */}
        <div className="rounded-lg border shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">Registration Type</h3>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 text-white p-1 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span>{rosterTypeLabels[rosterType]}</span>
            </div>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className=" rounded-lg border shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">Basic Information</h3>
          </div>
          <div className="px-4 py-4">
            <dl className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-muted-foreground">Name:</dt>
                <dd className="col-span-2 font-medium">{data.name}</dd>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-muted-foreground">Email:</dt>
                <dd className="col-span-2 font-medium">{data.email}</dd>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-muted-foreground">Phone:</dt>
                <dd className="col-span-2 font-medium">{data.phone}</dd>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-muted-foreground">Address:</dt>
                <dd className="col-span-2 font-medium">{data.address}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Uploaded Documents Section */}
        <div className=" rounded-lg border shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">Uploaded Documents</h3>
          </div>
          <div className="px-4 py-4">
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center space-x-3">
                  <div className={`p-1 rounded-full ${doc.status === 'extracted' ? 'bg-green-600 text-white' : 'bg-amber-600 text-white'}`}>
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI-Extracted Information Section */}
        {extractedFields.length > 0 && (
          <div className=" rounded-lg border shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b">
              <h3 className="text-lg font-semibold">AI-Extracted Information</h3>
            </div>
            <div className="px-4 py-4">
              <div className="space-y-4">
                {documents
                  .filter(doc => doc.extractedData)
                  .map((doc) => (
                    <div key={doc.id}>
                      <h4 className="text-sm font-medium text-brand-600 mb-2">{doc.name}</h4>
                      <dl className="space-y-1.5">
                        {doc.extractedData && Object.entries(doc.extractedData).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-3 gap-2">
                            <dt className="col-span-1 text-xs text-muted-foreground">{key}:</dt>
                            <dd className="col-span-2 text-sm font-medium">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSubmit;