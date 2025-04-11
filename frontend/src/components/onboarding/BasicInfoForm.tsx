import React, { useState } from 'react';
import { RosterType } from '../../types/roaster';
import { AlertCircle } from 'lucide-react';

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
        return '';
      case 'phone':
        if (value.trim() === '') return 'Phone number is required';
        if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)) 
          return 'Enter a valid phone number';
        return '';
      case 'address':
        return value.trim() === '' ? 'Address is required' : '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
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
    <div className="space-y-6 animate-fade-in">
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
            onBlur={handleBlur}
            placeholder={`Enter ${labels[rosterType].name.toLowerCase()}`}
            className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500`}
          />
          {errors.name && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.name}</span>
            </div>
          )}
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
            onBlur={handleBlur}
            placeholder={`Enter ${labels[rosterType].email.toLowerCase()}`}
            className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500`}
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.email}</span>
            </div>
          )}
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
            onBlur={handleBlur}
            placeholder={`Enter ${labels[rosterType].phone.toLowerCase()}`}
            className={`w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500`}
          />
          {errors.phone && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.phone}</span>
            </div>
          )}
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
            onBlur={handleBlur}
            placeholder={`Enter ${labels[rosterType].address.toLowerCase()}`}
            rows={3}
            className={`w-full rounded-md border ${errors.address ? 'border-red-500' : 'border-gray-300'} py-2 px-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500`}
          />
          {errors.address && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;