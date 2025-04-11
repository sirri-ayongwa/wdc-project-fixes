import React, { useState } from 'react';
import RosterTypeSelector from '../../components/onboarding/RosterTypeSelector';
import DocumentsSection, { showToast } from '../../components/onboarding/DocumentsSection';
import BasicInfoForm from '../../components/onboarding/BasicInfoForm';
import ReviewSubmit from '../../components/onboarding/ReviewSubmit';
import RegistrationSuccess from '../../components/onboarding/RegistrationSuccess';
import ProgressIndicator from '../../components/onboarding/ProgressIndicator';
import { RosterType, DocumentData } from '../../types/roaster';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    type: null as RosterType | null,
    name: '',
    email: '',
    phone: '',
    address: '',
    documents: [] as DocumentData[],
  });

  const steps = ["Type", "Documents", "Info", "Review"];

  const handleTypeSelect = (type: RosterType) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const handleBasicInfoChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentsChange = (documents: DocumentData[]) => {
    setFormData(prev => ({ ...prev, documents }));
  };

  const handleNextStep = () => {
    // Validation before moving to next step
    if (currentStep === 0 && !formData.type) {
      showToast(
        "Selection Required",
        "Please select a registration type to continue.",
        "error"
      );
      return;
    }

    if (currentStep === 1) {
      // Check if required documents are uploaded
      const requiredDocIds = formData.type === 'individual'
        ? ['id_document']
        : formData.type === 'company'
          ? ['business_registration', 'tax_document']
          : ['org_certification', 'org_structure'];
      
      const missingRequired = requiredDocIds.some(
        id => !formData.documents.find(doc => doc.id === id)
      );

      if (missingRequired) {
        showToast(
          "Required Documents Missing",
          "Please upload all required documents before proceeding.",
          "error"
        );
        return;
      }
    }

    if (currentStep === 2) {
      // Validate basic info
      if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        showToast(
          "Missing Information",
          "Please fill in all fields before continuing.",
          "error"
        );
        return;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showToast(
          "Invalid Email",
          "Please enter a valid email address.",
          "error"
        );
        return;
      }
    }

    // Move to the next step
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(steps.length); // Move to success page
    }, 1500);
  };

  const renderStepContent = () => {
    if (currentStep === steps.length) {
      return <RegistrationSuccess name={formData.name} email={formData.email} />;
    }

    switch (currentStep) {
      case 0:
        return <RosterTypeSelector selectedType={formData.type} onSelect={handleTypeSelect} />;
      case 1:
        if (!formData.type) return null;
        return (
          <DocumentsSection
            rosterType={formData.type}
            documents={formData.documents}
            onDocumentsChange={handleDocumentsChange}
          />
        );
      case 2:
        if (!formData.type) return null;
        return (
          <BasicInfoForm
            rosterType={formData.type}
            data={{
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              address: formData.address,
            }}
            onChange={handleBasicInfoChange}
          />
        );
      case 3:
        if (!formData.type) return null;
        return (
          <ReviewSubmit
            rosterType={formData.type}
            data={{
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              address: formData.address,
            }}
            documents={formData.documents}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-1 container py-8">
        {currentStep < steps.length && (
          <ProgressIndicator steps={steps} currentStep={currentStep} />
        )}
        
        <div className="max-w-3xl mx-auto  rounded-lg shadow-sm border p-6 md:p-8">
          {renderStepContent()}
          
          {currentStep < steps.length && (
            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 text-gray-50 hover:bg-gray-50 hover:text-black"
                  onClick={handlePrevStep}
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < steps.length - 1 ? (
                <button 
                  onClick={handleNextStep} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;