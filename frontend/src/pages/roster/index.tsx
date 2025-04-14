import React, { useState } from 'react';
import RosterTypeSelector from '../../components/onboarding/RosterTypeSelector';
import DocumentsSection, { showToast } from '../../components/onboarding/DocumentsSection';
import BasicInfoForm from '../../components/onboarding/BasicInfoForm';
import ReviewSubmit from '../../components/onboarding/ReviewSubmit';
import RegistrationSuccess from '../../components/onboarding/RegistrationSuccess';
import ProgressIndicator from '../../components/onboarding/ProgressIndicator';
import ImageUpload from '../../components/onboarding/ImageUpload';
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
    image: null as File | null,
    imagePreview: null as string | null,
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

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: reader.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setFormData(prev => ({
      ...prev,
      image: null,
      imagePreview: null
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 0 && !formData.type) {
      showToast("Selection Required", "Please select a registration type to continue.", "error");
      return;
    }

    if (currentStep === 1) {
      const requiredDocIds = formData.type === 'individual'
        ? ['id_document']
        : formData.type === 'company'
          ? ['business_registration', 'tax_document']
          : ['org_certification', 'org_structure'];

      const missingRequired = requiredDocIds.some(
        id => !formData.documents.find(doc => doc.id === id)
      );

      if (missingRequired) {
        showToast("Required Documents Missing", "Please upload all required documents before proceeding.", "error");
        return;
      }

      if (!formData.image) {
        showToast("Profile Image Required", "Please upload a profile image before proceeding.", "error");
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        showToast("Missing Information", "Please fill in all fields before continuing.", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showToast("Invalid Email", "Please enter a valid email address.", "error");
        return;
      }
    }

    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // ✅ Merge all extractedData objects
      const aiData = formData.documents.reduce((acc, doc) => {
        if (doc.extractedData) {
          return { ...acc, ...doc.extractedData };
        }
        return acc;
      }, {});

      const payload = {
        registrationType: formData.type,
        profilePicture: formData.imagePreview,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        idNumber: aiData["ID Number"] || "",
        nationality: aiData["Nationality"] || "",
        documentAddress: aiData["Document Address"] || "",
        accountNumber: aiData["Account Number"] || "",

        CompanyLogo: formData.imagePreview,
        CompanyName: aiData["Company Name"] || "",
        RegistrationNumber: aiData["Registration Number"] || "",
        CompanyType: aiData["Company Type"] || "",
        RegistrationDate: aiData["Registration Date"] || "",
        TaxID: aiData["Tax ID"] || "",
        TaxYear: aiData["Tax Year"] || "",
        FilingStatus: aiData["Filing Status"] || "",
        OrganizationName: aiData["Organization Name"] || "",
        CertificationNumber: aiData["Certification Number"] || "",
        IssueDate: aiData["Issue Date"] || "",
        Status: aiData["Status"] || "",
        Founded: aiData["Founded"] || "",
        President: aiData["President"] || "",
      };

      console.log("Payload being sent:", payload); // ✅ Debug check

      const response = await fetch("http://localhost:9000/api/roaster/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      const result = await response.json();
      console.log("Submission successful:", result);

      setIsSubmitting(false);
      setCurrentStep(steps.length);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      showToast("Submission Failed", "An error occurred while submitting. Please try again.", "error");
    }
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
          <div className="space-y-6">
            <DocumentsSection
              rosterType={formData.type}
              documents={formData.documents}
              onDocumentsChange={handleDocumentsChange}
            />
            <ImageUpload
              rosterType={formData.type}
              image={formData.image}
              preview={formData.imagePreview}
              onUpload={handleImageUpload}
              onRemove={handleImageRemove}
            />
          </div>
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
            profileImage={{
              file: formData.image,
              preview: formData.imagePreview
            }}
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

        <div className="max-w-3xl mx-auto rounded-lg shadow-sm border p-6 md:p-8">
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
