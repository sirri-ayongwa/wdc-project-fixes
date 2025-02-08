import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices } from "../constants";
import World from "../assets/services/world.png";
// import Strengths from "../assets/services/strengths.png";
import corevalues from "../assets/services/corevalues.jpg";
import img1 from "../assets/services/img1.png";
import img2 from "../assets/services/img2.png";
import img3 from "../assets/services/img3.png";
import img4 from "../assets/services/img4.png";

import Generating from "./Generating";

const Services = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-8">
        <div className="text-4xl font-bold text-center ">
          Our Strengths
        </div>
        <div className="container mx-auto py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {/* Column 1 */}
    <div className="flex flex-col items-center">
      <img
        src={img1}// Replace with your image path
        alt="Innovates for People"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Innovates for People</h3>
      <p className="text-sm text-gray-100">
        We place people at the heart of every solution, developing tools and insights that are simple, actionable, and transformative.
      </p>
    </div>
    {/* Column 2 */}
    <div className="flex flex-col items-center">
      <img
        src={img2} // Replace with your image path
        alt="Connects the World"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Connects the World</h3>
      <p className="text-sm text-gray-100">
      Our global network spans governments, NGOs, businesses, and individuals, ensuring that we leverage existing expertise & resources.
      </p>
      <br></br>
    </div>
    {/* Column 3 */}
    <div className="flex flex-col items-center">
      <img
        src={img3} // Replace with your image path
        alt="Operates in Real Time"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Operates in Real Time</h3>
      <p className="text-sm text-gray-100">
        From global systems to local communities, we provide real-time alerts, advice, and data to mitigate disaster impacts effectively.
      </p>
    </div>
    {/* Column 4 */}
    <div className="flex flex-col items-center">
      <img
        src={img4} // Replace with your image path
        alt="Is Inclusive"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Is Inclusive</h3>
      <p className="text-sm text-gray-100">
        We are a diverse, collaborative hub, uniting people from all backgrounds, ages, and expertise to create holistic solutions.
      </p>
    </div>
  </div>
</div>
        {/* <div>
          <img 
            src= {Strengths}
            alt = "strengths"
            className=""
          />
        </div> */}
 <div className="text-4xl font-bold text-center text-white py-16">Our Values</div>
<div className="relative w-full h-auto flex flex-wrap justify-center items-center gap-y-0 gap-x-0 px-4">
  {[
    { title: "Action-Oriented", description: "We take immediate action to save lives, knowing that every moment counts." },
    { title: "Collaboration Based", description: "We build strong partnerships to deliver swift and impactful solutions." },
    { title: "Tech-Driven", description: "We use cutting-edge technologies like AI and real-time data to improve disaster governance." },
    { title: "Inclusive", description: "We ensure disaster responses meet the needs of all, with a focus on marginalized groups." },
    { title: "Real-Time", description: "We provide real-time alerts and insights to empower effective decision-making and risk mitigation." },
    { title: "Worldwide", description: "Our global efforts unite organizations and individuals to build a more resilient and sustainable world." }
  ].map((value, index) => (
    <div 
      key={index}
      className="
        group 
        w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] 
        border-[4px] sm:border-[5px] lg:border-[6px] border-blue-300 
        rounded-full flex justify-center items-center 
        text-center text-white text-lg sm:text-xl font-bold 
        transition-all duration-300 ease-in-out 
        hover:bg-blue-500 hover:border-transparent hover:text-white cursor-pointer"
    >
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Title will hide on hover */}
        <span className="z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0">{value.title}</span>
        
        {/* Description will show on hover */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-90 text-sm sm:text-lg font-normal flex justify-center items-center p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {value.description}
        </div>
      </div>
    </div>
  ))}
</div>
<br></br>
<br></br>


     </div>
  );
};

export default Services;
