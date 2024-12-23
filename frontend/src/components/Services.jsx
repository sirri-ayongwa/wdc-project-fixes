import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices } from "../constants";
import World from "../assets/services/world.png";
import Strengths from "../assets/services/strengths.png";
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
        Our global network spans governments, NGOs, businesses, and individuals, creating a holistic approach that leverages existing expertise & resources.
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
        <div className="text-4xl font-bold text-center pb-16">
              Our Values
        </div>
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="w-full h-full justify-center items-center mr-8"> 
            <img 
              src= {corevalues}
              alt = "strengths"
            />
          </div>
          <div className=" w-4/5 h-full justify-center items-center">
            <div className="text-2xl m-4 font-bold" >
              Action Oriented:
              <div className="text-sm mx-4 my-2 font-normal">
                We prioritize immediate, impactful responses over lengthy deliberations, ensuring lives are saved without delay.
              </div>
            </div>
            <div className="text-2xl m-4 font-bold" >
              Collaboration:
              <div className="text-sm mx-4 my-2 font-normal">
                We believe in the power of partnerships, fostering a spirit of unity to achieve shared goals.
              </div>
            </div>
            <div className="text-2xl m-4 font-bold" >
              Innovation:
              <div className="text-sm mx-4 my-2 font-normal">
                We work tirelessly to develop and implement forward-thinking solutions that address evolving disaster challenges.
              </div>
            </div>
            <div className="text-2xl m-4 font-bold" >
              Empathy:
              <div className="text-sm mx-4 my-2 font-normal">
                At our core, we are driven by compassion and a deep commitment to alleviating human suffering.
              </div>
            </div>
            <div className="text-2xl m-4 font-bold" >
              Inclusivity
              <div className="text-sm mx-4 my-2 font-normal">
                We embrace diversity and create opportunities for all voices to be heard and valued.
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services;
