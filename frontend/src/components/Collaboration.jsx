import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import WDC from "../assets/images/wdc.png";
import { useEffect, useState } from "react";
import BasicPopover from "./popupInfo";

const Collaboration = () => {
  const [showPanel, setPanel] = useState(false);
  const [hovered, setHovered] = useState("");

  const collabdata = {
    Volcano:
      "A volcano is a geological feature where molten rock (magma) erupts from the Earth’s crust",
    Tornado:
      " A tornado is a rapidly rotating column of air extending from a thunderstorm to the ground.",
    Rain: "Rain is precipitation in the form of water droplets falling from the atmosphere.",
    Floods: "Floods occur when water covers land that is usually dry.",
    Fire: "Fire refers to uncontrolled combustion that can spread rapidly",
    Wave: "Waves are oscillations of water on the surface of oceans, seas, or lakes",
    Landslide:
      "A landslide is the downward movement of rock, soil, or debris on a slope.",
    Raindrop:
      "A raindrop is a single water droplet falling from the sky during rainfall",
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleWindowMouseMove = (event) => {
  //     setCoords({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", handleWindowMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleWindowMouseMove);
  //   };
  // }, []);

  function OpenPopup(event, title) {
    setPanel(true);
    setHovered(collabdata[title]);
    setCoords({
      x: event.pageX,
      y: event.pageY,
      x1: event.screenX,
      y1: event.screenY,
    });
    // console.log({
    //   x: event.pageX,
    //   y: event.pageY,
    //   x1: event.screenX,
    //   y1: event.screenY,
    // });
    // console.log(event);
  }

  function ClosePopup(event) {
    setPanel(false);
  }

  return (
    <>
      <Section crosses>
        {showPanel === true ? (
          <BasicPopover coords={coords} text={hovered} />
        ) : null}

        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">Types of Disasters Monitored</h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14">
              {collabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check} width={24} height={24} alt="check" />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>

            <Button href="/signin">Join Us</Button>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
              {collabText}
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img src={WDC} width={60} height={60} alt="brainwave" />
                  </div>
                </div>
              </div>

              <div className="animate-rotation">
                <ul className="">
                  {collabApps.map((app, index) => (
                    <li
                      key={app.id}
                      className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                        index * 45
                      }`}
                    >
                      <div
                        onMouseEnter={(e) => OpenPopup(e, app.title)}
                        onMouseLeave={ClosePopup}
                        className={` relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                          index * 45
                        }`}
                      >
                        <img
                          className="m-auto"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Collaboration;
