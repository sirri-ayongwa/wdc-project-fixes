import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface RegistrationSuccessProps {
  name: string;
  email: string;
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ name, email }) => {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-semibold text-brand-950">Registration Successful!</h2>
      
      <div className="max-w-md mx-auto">
        <p className="text-muted-foreground">
          Thank you for registering with RosterAI. We've sent a confirmation email to <span className="font-medium text-foreground">{email}</span>.
        </p>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-5 max-w-lg mx-auto mt-6">
        <p className="text-sm mb-3">Your registration details:</p>
        <p className="font-medium text-lg">{name}</p>
        <p className="text-muted-foreground text-sm">{email}</p>
        <div className="mt-3 text-sm text-brand-600">
          Reference ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </div>
      </div>
      
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSuccess;