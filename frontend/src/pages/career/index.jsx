import React from "react";
import { toast } from "react-toastify";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { openPositons } from "../../assets/data/openPositions";
import Button from "../../components/Button";

function CareerPage() {
  return (
          <Section className="overflow-hidden" id="career">
            <div className="container flex flex-col justify-center items-center">
              <Heading
                tag="Careers at World Disaster Center"
                title="Career Opportunities."
                text={`World Disaster Center embraces a youthful and flexible spirit,
                        enabling us to swiftly adapt to current research,
                     conditions, and customer demands through our advanced technology.`}
                  />
            {/* positons list */}
            <h5 className="text-gray-50 text-left  lg:text-xl text-base font-bold leading-10">
              Open Volunteering Positions
            </h5>
            <div className=" py-4 ">
                { openPositons.map((item, index)=>(
                    <div key={index} className="flex justify-between gap-8 py-2 border-b border-gray-500">
                        <p className="text-gray-400 hover:text-gray-300 text-xl font-medium leading-8">
                        {item.position}
                        </p>
                            <Button
                              href="https://www.volunteermatch.org/search/opp3853051.jsp"
                              target="_blank"
                              white
                            >
                              Apply
                            </Button>
                    </div>
                ))}
            </div>


          <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
            <h3 className="text-gray-400 text-center lg:text-2xl text-xl font-bold leading-10 mb-5">
              World Disaster Center thrives on a spirit of agility
            </h3>

            <div className="lg:mt-18 mt-10 bg-gradient-to-l from-green-600 to-indigo-600 p-12 rounded-lg ">
              <div className="lg:flex items-center justify-between gap-6">
                <div className="lg:mb-0 mb-10">
                  <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                    {`Don't see the role you're interested in?`}
                  </h3>
                  <p className="text-indigo-100 text-xl font-normal leading-8">
                    We’re always looking for talented people to join our team.
                    Send us your CV and we will contact you for any future
                    roles.
                  </p>
                </div>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="px-2.5 h-14 flex items-center justify-center text-indigo-600 text-lg font-semibold leading-7 gap-2 rounded-full bg-white whitespace-nowrap"
                >
                  {" "}
                  Send Your CV{" "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.75 11L17.4167 11M12.8333 16.5L17.6852 11.6482C17.9907 11.3426 18.1435 11.1898 18.1435 11C18.1435 10.8102 17.9907 10.6574 17.6852 10.3518L12.8333 5.5"
                      stroke="#4F46E5"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
  );
}

export default CareerPage;
