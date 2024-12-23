import { useState } from "react";
import MOBILEGIF from "../assets/gif/mobilephones.gif";
import MICHAEL from "../assets/gif/Michael_Website.gif";
import DREAM from "../assets/gif/dream.gif";
import { Link } from "react-router-dom";
import { GradientLight } from "./design/Benefits";

const items = [
  {
    id: 1,
    title: "Your Support Saves Lives",
    description:
      "Every Dollar Powers Cutting-Edge Technology and Real-Time Solutions for Disaster-Stricken Communities",
    buttonText: "Donate now →",
    link: "https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE",
    image: MOBILEGIF,
  },
  {
    id: 2,
    title: "Meet Michael: The AI Changing How the World Prepares for Disasters",
    description:
      "Harnessing Real-Time Data and Predictive Power, Michael Is Revolutionizing Disaster Management.",
    buttonText: "Explore Michael →",
    link: "/cases/Michael",
    image: MICHAEL,
  },
  {
    id: 3,
    title: "Because Every Dream Deserves a Safe Place to Grow",
    description:
      "We Empower Dreams by Protecting Lives. Together, We Can Make the World Safer for Everyone.",
    buttonText: "Learn about our Mission →",
    link: "/about",
    image: DREAM,
  },
];

const Slideshow = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  // Handle Thumbnail Click
  const handleThumbnailClick = (index) => {
    if (index !== selectedItem) {
      setSelectedItem(index);
    }
  };

  //test

  return (
    <div className="relative flex flex-col w-full mb-24 overflow-visible">
      {/* Gradient Light */}
      <div className="overflow-hidden w-full h-[600px] absolute inset-0 -z-10 ">
          <GradientLight className="w-full h-full"/>
      </div>
      {/* Main Content */}
      <div
        className="relative flex flex-row transition-transform duration-300"
        style={{
          transform: `translateX(-${selectedItem * 100}%)`,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full h-[600px] flex-shrink-0 flex flex-row items-center"
          >
            {/* Left Image */}
            <div className="w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-1/2 h-full p-10 flex flex-col justify-center items-start">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              <p className="mb-6 text-sky-300">{item.description}</p>
              <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                <Link to={item.link} target="_blank">
                  {item.buttonText}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative w-full">
        <div className="flex justify-center mt-4 space-x-8 p-6 bg-[#031127] rounded-tr-2xl rounded-tl-2xl absolute overflow-visible left-1/2 -translate-x-1/2 bottom-[-100px]">
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`w-44 h-28 border-4 ${
                selectedItem === index
                  ? "border-blue-600"
                  : "border-transparent"
              } rounded-md hover:border-blue-400 transition-all duration-300`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={item.image}
                alt={`Thumbnail ${item.title}`}
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

