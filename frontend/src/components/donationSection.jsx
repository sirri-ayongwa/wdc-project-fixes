import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import DonationSteps from "./DonationSteps";

function DonationSection() {
 const text=`World Disaster Center (WDC) is supported by a diversified donor base, 
            including governmental agencies, donations and private foundations. 
            Our partnerships reflect a global commitment to
            enhancing disaster resilience and supporting communities in need.`;
  return( 
    <Section className="overflow-hidden" id="donation">
    <div className="container flex flex-col justify-center items-center">
      <Heading
        tag="World Disaster center Donatation"
        title="Thank you for your support."
        
      />
              <DonationSteps/>
        <p className="body-1 mt-6 text-left text-gray-50 ">{text}</p>
        </div>
    </Section>
  )
}

export default DonationSection;
