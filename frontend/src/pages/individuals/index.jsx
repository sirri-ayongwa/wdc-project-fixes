import React from "react";
import Heading from "../../components/Heading";
import { FaChalkboardTeacher, FaLaptop, FaUsers } from "react-icons/fa";
const individualOptions = [
  {
    title: "In Person",
    description: "Attend in-person training sessions with expert instructors.",
    link: "/academy/training/in-person",
    icon: <FaChalkboardTeacher className="text-[#8E499B] text-6xl mb-4" />
  },
  {
    title: "MOOCs",
    description: "Access online courses at your own pace.",
    link: "/academy/training/moocs",
    icon: <FaLaptop className="text-[#004574] text-6xl mb-4" />,
  },
  {
    title: "Webinars",
    description: "Join live webinars hosted by industry experts.",
    link: "/academy/training/webinars",
    icon: <FaUsers className="text-[#35AC46] text-6xl mb-4" />,
  },
];

const Individuals = () => {
  return (
    <div className="container mx-auto p-6">
      <Heading
        title="Options for Individuals"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {individualOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white mb-4 rounded-lg shadow-md overflow-hidden p-6"
          >
            <div className="flex justify-center">{option.icon}</div>
            <h2 className="text-xl  text-emerald-950  text-center mb-2">{option.title}</h2>
            <p className=" text-emerald-950 text-center mb-4">{option.description}</p>
            <div className=" flex justify-center">
              <a
                href={option.link}
                className="flex text-blue-500 hover:underline font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Individuals;