import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { MdTornado, MdCloud } from "react-icons/md";
import { FaWater, FaWaveSquare } from "react-icons/fa";
import GIF1 from "../assets/gif/world.gif";
import VID1 from "../assets/video/Digital World Map.mp4";
import MOBILEGIF from "../assets/gif/mobilephones.gif"
import MICHAEL from "../assets/gif/Michael_Website.gif"
import DREAM from "../assets/gif/dream.gif"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("userAuth"))
  );
  const location = useLocation();

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("userAuth")));
  }, [location]);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <video
        className="absolute backgroundImageGif object-cover  w-full overflow-hidden"
        autoPlay={true}
        loop={true}
        muted
      >
        <source src={VID1} type="video/mp4" />
      </video>
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            The Global Disaster Monitoring&nbsp;and&nbsp;Alert System {` `}
            <span className="inline-block relative">
              ‘‘Michael’’{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className="body-1 max-w-[91%] mx-auto mb-6 text-n-2 font-semibold lg:mb-8"
            style={{ textShadow: "1px 1px 2px rgba(40, 40, 40, 0.4)" }}
          >
            Michael harnesses advanced AI and real-time data to deliver
            life-saving insights, empowering you to navigate disasters with
            confidence and control.
          </p>
          <Button href={"https://doc.storydoc.ai/fDqGCI"} white>
            {"Learn more about michael"}
          </Button>
        </div>
      </div>
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>
      <BackgroundCircles />
      {/* <BottomLine /> */}
      
    </Section>
    
  );
};

export default Hero;
