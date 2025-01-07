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
import GIF1 from "../assets/gif/WDC_Shorts.gif";
import VID1 from "../assets/video/Digital World Map.mp4";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        className="absolute backgroundImageGif object-cover"
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
          <Button href={"/cases/Michael"} white>
            {"Learn more about michael"}
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <Link to="/request-demo">
                <div className="cursor-pointer aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/550]">
                  <img
                    src={GIF1}
                    className=" cursor-pointer w-full scale-[0.2] translate-y-[5%] md:scale-[1] md:-translate-y-[20%] lg:-translate-y-[2%] object-cover"
                    width={404}
                    alt="AI"
                  />
                  {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {/* {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))} */}
                      <li className="p-5">
                        <MdTornado />
                      </li>
                      <li className="p-5">
                        <MdCloud />
                      </li>
                      <li className="p-5">
                        <FaWater />
                      </li>
                      <li className="p-5">
                        <FaWaveSquare />
                      </li>
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Real-time alerts for various types of disasters"
                    />
                  </ScrollParallax>
                </div>
              </Link>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;