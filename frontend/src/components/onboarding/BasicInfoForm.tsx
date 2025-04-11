import React from 'react';
import { RosterType } from '../../types/roaster';

interface BasicInfoFormProps {
  rosterType: RosterType;
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  onChange: (field: string, value: string) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ rosterType, data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.name, e.target.value);
  };

  const labels = {
    individual: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Home Address",
    },
    company: {
      name: "Company Name",
      email: "Business Email",
      phone: "Business Phone",
      address: "Business Address",
    },
    organization: {
      name: "Organization Name",
      email: "Organization Email",
      phone: "Contact Number",
      address: "Organization Address",
    },
  };

  return (
    <div className="space-y-6 animate-fade-in ">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-brand-950">Basic Information</h2>
        <p className="text-muted-foreground mt-2">
          Please provide the following details
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-50"
          >
            {labels[rosterType].name}
          </label>
          <input 
            id="name" 
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder={`Enter ${labels[rosterType].name.toLowerCase()}`}
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-50"
          >
            {labels[rosterType].email}
          </label>
          <input 
            id="email" 
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder={`Enter ${labels[rosterType].email.toLowerCase()}`}
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-gray-50"
          >
            {labels[rosterType].phone}
          </label>
          <input 
            id="phone" 
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange}
            placeholder={`Enter ${labels[rosterType].phone.toLowerCase()}`}
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="address" 
            className="block text-sm font-medium text-gray-50"
          >
            {labels[rosterType].address}
          </label>
          <textarea 
            id="address" 
            name="address"
            value={data.address}
            onChange={handleChange}
            placeholder={`Enter ${labels[rosterType].address.toLowerCase()}`}
            rows={3}
            className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;