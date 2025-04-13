import React from "react";
import Heading from "../../components/Heading";
import { FaChalkboardTeacher, FaLaptop, FaUsers } from "react-icons/fa";
const individualOptions = [
  {
    title: "In Person",
    description: "Attend in-person training sessions with expert instructors.",
    link: "/academy/training/individuals/in-person",
    icon: <FaChalkboardTeacher className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "MOOCs",
    description: "Access online courses at your own pace.",
    link: "/academy/training/individuals/moocs",
    icon: <FaLaptop className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Webinars",
    description: "Join live webinars hosted by industry experts.",
    link: "/academy/training/individuals/webinars",
    icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
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
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
             <div className="flex justify-center">{option.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
            <p className="text-white-600 mb-4">{option.description}</p>
            <a
              href={option.link}
              className="text-blue-500 hover:underline font-medium"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Individuals;