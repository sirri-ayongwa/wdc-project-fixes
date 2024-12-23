import React from "react";
import Services from "../../components/Services";
import Benefits from "../../components/Benefits";
import Collaboration from "../../components/Collaboration";
import QNA from "../../components/qna";
import HowWeWork from "../../components/howwework";
import WhoWeAre from "../../components/WhoWeAre";
import OurMission from "../../components/OurMission";
import OurVision from "../../components/OurVision";
import OurValues from "../../components/ourValues";
import Button from "../../components/Button";

function AboutPage() {
  return (
    <div className="justify-center items-center flex flex-col p-8 mt-10 mx-28">
      <div className='border-t-2 mb-6 border-gray-400 rounded-full w-full'></div>
      <div className="text-4xl text-center mb-6">
        "We on a mission to minimize the impact of disasters everywhere."
      </div>
      <div className='border-b-2 mb-4 border-gray-400 rounded-full w-full'></div>
        <WhoWeAre />
      {/* <div className="flex justify-center">
        <Button href="https://issuu.com/worlddisastercenter/docs/wdc_008_bleu_format">
          Read more
        </Button>
      </div> */}
      <div className='border-t-2 mb-6 border-gray-400 rounded-full w-full'></div>
      <div className="text-4xl text-center mb-6">
      "We envision a world where no life is lost to unpreparedness, where communities thrive in safety, and individuals achieve their dreams free from the fear of disasters."
      </div>
      <div className='border-b-2 mb-4 border-gray-400 rounded-full w-full'></div>
      <HowWeWork />
      <Services />
      <div className='border-t-2 mb-6 border-gray-400 rounded-full w-full'></div>
      <div className="text-4xl text-center mb-6">
      "World Disaster Center: Because Safety Is the Foundation of a Better Tomorrow."
      </div>
      <div className='border-t-2 mb-6 border-gray-400 rounded-full w-full'></div>
    </div>
  );
}

export default AboutPage;
