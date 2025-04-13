import React from "react";
import Heading from "../../components/Heading.jsx";
import { FaChalkboardTeacher, FaLaptop, FaUsers } from "react-icons/fa";

const organizationOptions = [
  {

    title: "In Person",
    description: "Tailored in-person training sessions for your team.",
    link: "/academy/training/in-person",
    totalPeople: "Up to 50 people",
  icon: <FaChalkboardTeacher className="text-[#8E499B] text-6xl mb-4" />
  },
  {
    title: "MOOCs",
    description: "Online courses designed for organizational teams.",
    link: "/academy/training/moocs",
    totalPeople: "Unlimited participants",
      icon: <FaUsers className="text-[#35AC46] text-6xl mb-4" />,
  },
  {
    title: "Webinars",
    description: "Live webinars for your organization's staff.",
    link: "/academy/training/webinars",
    totalPeople: "Up to 100 people",
      icon: <FaLaptop className="text-[#004574] text-6xl mb-4" />,
  },
];

const Organizations = () => {
  return (
    <div className="container mx-auto p-6">
      <Heading
        title="Options for Organizations"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizationOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white mb-4 rounded-lg shadow-md overflow-hidden p-6"
          >

            <div className="flex justify-center">{option.icon}</div>
            <h2 className="text-xl  text-emerald-950  text-center mb-2">{option.title}</h2>
            <p className=" text-emerald-950 text-center mb-4">{option.description}</p>
            <p className=" text-emerald-950 text-center mb-4">Capacity: {option.totalPeople}</p>
            <div className=" flex justify-center">
            <a
              href={option.link}
              className="flex text-blue-500  text-center hover:underline font-medium"
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

export default Organizations;