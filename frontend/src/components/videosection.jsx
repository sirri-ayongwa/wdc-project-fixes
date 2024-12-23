import React from "react";
import ReactPlayer from "react-player";
import TagLine from "./Tagline";
import Section from "./Section";
import Heading from "./Heading";
import { Button } from '@mui/material';
import { GradientLight } from "./design/Benefits";
import { Link } from "react-router-dom";
import END_DISASTER_IMPACTS from "../assets/images/END_DISASTER_IMPACTS.png"

function VideoSection() {
  return (
    <Section crosses>
      <div className="container sm:px-2" >
            <div className="flex flex-col lg:flex-row  bg-n-4 rounded-lg  shadow-md shadow-n-4 ">
                <GradientLight />
                <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src = {END_DISASTER_IMPACTS}
                  alt = "end disaster impacts"
                />
              </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 p-10">
                  <h3 className="text-5xl font-bold text-gray-50">The World We Are Building</h3>
                  <p className="h5  text-n-8 mt-4  ">
                  A New Era of Resilience and Empowerment
                  </p>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    className="w-max"
                  >
                    <Link 
                      to = "/about"
                    >
                      More about us &rarr;
                    </Link>
                    
                  </Button>
                </div>
          </div>
      </div>
    </Section>
  );
}

export default VideoSection;
