import React from "react";
import "./style.css";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

function NotfoundPage() {
  return (
    <div className="notfound-container min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full mx-auto text-center">
        <div className="notfound-graphic mb-8">
          <svg 
            viewBox="0 0 200 100" 
            className="w-full h-auto"
            aria-hidden="true"
          >
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="notfound-text">404</text>
            <circle cx="140" cy="30" r="3" className="notfound-circle" />
            <circle cx="60" cy="70" r="3" className="notfound-circle" />
            <path d="M30,30 L45,45" className="notfound-line" />
            <path d="M170,70 L155,55" className="notfound-line" />
          </svg>
        </div>
        
        <Heading
          title="Page Not Found"
          tag="Oops!"
          className="text-center mb-6"
          crosses
        />
        
        <p className="text-gray-600 mb-10 text-lg">
          We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" className="text-xl px-8 py-3" white>
            Return Home
          </Button>
          <Button href="/contact" className="text-xl px-8 py-3" secondary>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotfoundPage;