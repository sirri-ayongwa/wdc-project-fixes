
import React from "react";
import { strategicpartner_companyLogos } from "../constants";
import { collaborator_companyLogos } from "../constants";
import { technicalsponsor_companyLogos } from "../constants";
import { implmentationpartner_companyLogos } from "../constants";
import { financialpartner_companyLogos } from "../constants";
import { technicalpartner_companyLogos } from "../constants";

const companyLogos = [
  ...strategicpartner_companyLogos,
  ...collaborator_companyLogos,
  ...technicalsponsor_companyLogos,
  ...implmentationpartner_companyLogos,
  ...financialpartner_companyLogos,
  // ...technicalpartner_companyLogos,
];

const AnimatedBanner = () => {
  return (
    <div className="relative overflow-hidden bg-white py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {companyLogos.map((logo, index) => (
          <span className="inline-block mx-8" key={index}>
            <img 
              src={logo} 
              className="h-14 w-auto object-contain" // Ensures all logos have the same height
              alt={`Company logo ${index}`} 
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBanner;
