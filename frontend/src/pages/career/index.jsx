import React from "react";
import { toast } from "react-toastify";

function CareerPage() {
  return (
    <div className="font-inter">
      <br />
      <section className="">
        <div className="w-full">
          <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
            <span className="w-fit mx-auto flex items-center justify-center bg-blue-200 rounded-full text-blue-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
              Careers at World Disaster Center
            </span>
            <h1 className="text-gray-300 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">
              Career Opportunities{" "}
            </h1>
            <p className="text-blue-400 text-center text-lg font-normal leading-7">
              World Disaster Center embraces a youthful and flexible spirit,
              enabling us to swiftly adapt to current research, <br />{" "}
              conditions, and customer demands through our advanced technology.{" "}
            </p>
          </div>
          <div className="lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 px-10">
            <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">
              Open Positions
            </h2>
            <div className="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12">
              <div className="flex justify-between gap-x-8 pb-6 border-b border-gray-200">
                <h3 className="text-gray-900 hover:text-blue-600 text-xl font-medium leading-8">
                  Data Analyst
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="hover:text-blue-600 text-gray-900 text-xl font-medium leading-8">
                  UX/UI Designer
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 hover:text-blue-600 text-xl font-medium leading-8">
                  AI Specialist
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 hover:text-blue-600 text-xl font-medium leading-8">
                  Product Designer
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 text-xl hover:text-blue-600 font-medium leading-8">
                  Visualization Specialist
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 pt-6">
                <h3 className="text-gray-900 hover:text-blue-600 text-xl font-medium leading-8">
                  Project Manager
                </h3>
                <button
                  onClick={() => toast("Coming Soon", { theme: "dark" })}
                  className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-blue-600 text-xs font-semibold leading-4"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
            <h3 className="text-gray-400 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">
              World Disaster Center thrives on a spirit of agility
            </h3>

            <div className="lg:mt-24 mt-10 bg-gradient-to-l from-green-600 to-indigo-600 p-12 rounded-2xl ">
              <div className="lg:flex items-center justify-between gap-6">
                <div className="lg:mb-0 mb-10">
                  <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                    Don't see the role you're interested in?
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
      </section>
    </div>
  );
}

export default CareerPage;
