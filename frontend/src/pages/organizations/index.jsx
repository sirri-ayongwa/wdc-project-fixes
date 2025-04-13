import React from "react";
import Heading from "../../components/Heading.jsx";
import { FaChalkboardTeacher, FaLaptop, FaUsers } from "react-icons/fa";

const organizationOptions = [
  {

    title: "In Person",
    description: "Tailored in-person training sessions for your team.",
    link: "/academy/training/organizations/in-person",
    totalPeople: "Up to 50 people",
    icon: <FaChalkboardTeacher className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "MOOCs",
    description: "Online courses designed for organizational teams.",
    link: "/academy/training/organizations/moocs",
    totalPeople: "Unlimited participants",
    icon: <FaLaptop className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Webinars",
    description: "Live webinars for your organization's staff.",
    link: "/academy/training/organizations/webinars",
    totalPeople: "Up to 100 people",
    icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
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
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >

            <div className="flex justify-center">{option.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
            <p className="text-white-600 mb-2">{option.description}</p>
            <p className="text-white-500 mb-4">Capacity: {option.totalPeople}</p>
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

export default Organizations;