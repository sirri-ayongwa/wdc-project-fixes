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
import { Helmet } from "react-helmet-async";
  
  function AboutPage() {
    return (
      <>
        {/* Add SEO Meta Tags */}
        <Helmet>
          <title>About Us | World Disaster Center</title>
          <meta 
            name="description" 
            content="Learn more about the World Disaster Center's mission, vision, and dedication to addressing global disasters." 
          />
          <meta 
            name="keywords" 
            content="World Disaster Center, About World Disaster Center, diaster news, global disaster management, disaster solutions, emergency preparedness, save lives, end disaster impacts, disasters" 
          />
          <meta name="author" content="World Disaster Center" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="About Us | World Disaster Center" />
          <meta 
            property="og:description" 
            content="Discover how World Disaster Center works to end disaster impacts worldwide. Learn about our mission, vision, values, and services." 
          />
          <meta property="og:url" content="https://www.worlddisastercenter.org/about" />
          <meta property="og:type" content="website" />
        </Helmet>
  
        {/* About Page Content */}
        <div className="justify-center items-center flex flex-col p-8 mt-10 mx-28">
          <div className="border-t-2 mb-6 border-gray-400 rounded-full w-full"></div>
          <div className="text-4xl text-center mb-6">
            "We are on a mission to end disaster impacts everywhere."
          </div>
          <div className="border-b-2 mb-4 border-gray-400 rounded-full w-full"></div>
          <WhoWeAre />
          <div className="border-t-2 mb-6 border-gray-400 rounded-full w-full"></div>
          <div className="text-4xl text-center mb-6">
            "We envision a world where disasters no longer disrupt determination, dreams, or aspiration."
          </div>
          <div className="border-b-2 mb-4 border-gray-400 rounded-full w-full"></div>
          <HowWeWork />
          <Services />
          <div className="border-t-2 mb-6 border-gray-400 rounded-full w-full"></div>
          <div className="text-4xl text-center mb-6">
            "We are dedicated to transforming challenges into opportunities."
          </div>
          <div className="border-t-2 mb-6 border-gray-400 rounded-full w-full"></div>
        </div>
      </>
    );
  }

export default AboutPage;
