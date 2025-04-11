import React, { useState, useRef } from 'react';
import { Upload, X, Check, Loader2, Image as ImageIcon } from "lucide-react";
import { RosterType } from '../../types/roaster';

interface ImageUploadProps {
  rosterType: RosterType;
  image: File | null;
  preview: string | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  rosterType,
  image,
  preview,
  onUpload,
  onRemove
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const labels = {
    individual: {
      title: "Profile Picture",
      description: "Upload a clear profile photo"
    },
    company: {
      title: "Company Logo",
      description: "Upload your company logo"
    },
    organization: {
      title: "Organization Logo",
      description: "Upload your organization's logo"
    }
  };

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
      e.target.value = '';
    }
  };

  const handleFileUpload = (file: File) => {
    // Validate file type
    if (!file.type.match('image/jpeg|image/png|image/jpg')) {
      alert("Please upload an image file (JPEG, PNG)");
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image is too large. Please upload an image smaller than 2MB");
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      onUpload(file);
      setIsUploading(false);
    }, 1000);
  };

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 pb-3 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-medium">{labels[rosterType].title}</h3>
          <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">Required</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{labels[rosterType].description}</p>
      </div>
      
      <div>
        {!image ? (
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
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
            <Upload className="h-8 w-8 mb-2 text-gray-400" />
            <p className="text-sm font-medium mb-1">Drop image here or click to upload</p>
            <p className="text-xs text-gray-500">JPEG or PNG (max 2MB)</p>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ImageIcon className="h-8 w-8 text-brand-600" />
                <div className="space-y-1">
                  <p className="text-sm font-medium truncate max-w-[180px]">
                    {image?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {((image?.size ?? 0) / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {isUploading && <Loader2 className="h-4 w-4 animate-spin text-brand-600" />}
                {!isUploading && <Check className="h-4 w-4 text-green-600" />}
                <button
                  className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                  onClick={onRemove}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {preview && (
              <div className="mt-4 border rounded-md overflow-hidden">
                <img 
                  src={preview} 
                  alt={`${rosterType} image`} 
                  className="object-cover w-full h-40" 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;