import React from 'react';
import { Building, Briefcase, User } from "lucide-react";
import { RosterType } from '../../types/roaster';

interface RosterTypeSelectorProps {
  selectedType: RosterType | null;
  onSelect: (type: RosterType) => void;
}

const RosterTypeSelector: React.FC<RosterTypeSelectorProps> = ({ selectedType, onSelect }) => {
  const options: { type: RosterType; title: string; description: string; icon: React.ReactNode }[] = [
    {
      type: "individual",
      title: "Individual",
      description: "Register as an individual person",
      icon: <User className="h-6 w-6" />,
    },
    {
      type: "company",
      title: "Company",
      description: "Register a business or company",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      type: "organization",
      title: "Organization",
      description: "Register a non-profit or organization",
      icon: <Building className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-brand-950">Select Registration Type</h2>
        <p className="text-muted-foreground mt-2">Choose the type of roster you want to register for</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option.type}
            className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedType === option.type 
                ? 'border-2 border-brand-600 shadow-sm' 
                : 'border border-gray-200 hover:border-brand-200'
            }`}
            onClick={() => onSelect(option.type)}
          >
            <div className="p-4 pb-2">
              <div className="flex justify-between items-center">
                <div
                  className={`p-2 rounded-full ${
                    selectedType === option.type ? 'bg-black text-white' : 'bg-gray-500 text-white'
                  }`}
                >
                  {option.icon}
                </div>
                {selectedType === option.type && (
                  <div className="w-3 h-3 bg-brand-600 rounded-full"></div>
                )}
              </div>
              <h3 className="text-lg font-medium mt-2 text-black">{option.title}</h3>
            </div>
            <div className="px-4 pb-4">
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RosterTypeSelector;