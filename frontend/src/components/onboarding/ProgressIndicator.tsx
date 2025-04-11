import React from 'react';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="hidden md:block pt-6 pb-10">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-3xl flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step}>
              {/* Step indicator */}
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm z-10
                    ${index < currentStep
                      ? 'bg-brand-600 text-white' 
                      : index === currentStep
                        ? 'bg-white text-black border-2 border-brand-600 text-brand-600'
                        : 'bg-muted text-muted-foreground'
                    }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`absolute top-10 text-xs font-medium
                    ${index <= currentStep ? 'text-brand-700' : 'text-muted-foreground'}`}
                >
                  {step}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-1">
                  <div
                    className={`h-1 ${
                      index < currentStep ? 'bg-brand-600' : 'bg-muted'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
