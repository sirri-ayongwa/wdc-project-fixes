import React from "react";
import Heading from "../../components/Heading";

const webinars = [
  {
    title: "Disaster Preparedness Webinar",
    date: "April 20, 2025",
    time: "10:00 AM - 12:00 PM",
    price: "$50",
    link: "/payment/disaster-preparedness",
    image: "https://cdn.pixabay.com/photo/2020/06/07/21/04/ems-5272152_1280.jpg", 
  },
  {
    title: "Climate Change and Resilience",
    date: "May 5, 2025",
    time: "2:00 PM - 4:00 PM",
    price: "$75",
    link: "/payment/climate-change",
    image: "https://cdn.pixabay.com/photo/2017/08/23/08/31/nature-2671900_960_720.jpg",
  },
];

const Webinars = () => {
  return (
    <div className="container mx-auto p-6">
      <Heading
        title="Upcoming Webinars"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <div className="grid grid-cols-1 gap-6">
        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <img
              src={webinar.image}
              alt={webinar.title}
              className="w-full md:w-1/3 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none mb-4 md:mb-0"
            />
            {/* Text Content Section */}
            <div className="flex flex-col justify-center md:pl-6">
              <h2 className="text-[#383333] text-xl font-semibold mb-2">
                {webinar.title}
              </h2>
              <p className="text-gray-600 mb-2">Date: {webinar.date}</p>
              <p className="text-gray-600 mb-2">Time: {webinar.time}</p>
              <p className="text-gray-600 mb-4">Price: {webinar.price}</p>
              <a
                href={webinar.link}
                className="text-blue-500 hover:underline font-medium"
              >
                Pay Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;