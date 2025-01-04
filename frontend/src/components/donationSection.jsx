import React, { useState, useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { FaUserShield, FaUsers, FaSchool, FaHandsHelping, FaTools, FaSatelliteDish, FaCity, FaUserFriends, FaShieldAlt } from "react-icons/fa"; // Import icons
import BeforeAfterVisual from "./BeforeAfterVisual";
import story from "../assets/images/onedollarstory.png";

function DonationSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "But HOPE starts with YOU.";

  // Typewriter Effect
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  return (
    <Section className="overflow-hidden" id="donation">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center">
        <Heading tag="Donate Generously" title="Act Now Before It's Too Late." />

        {/* Section 2: Global Disaster Safety Overview */}
        <div className="rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
          <p className="text-lg text-white-700">
            Out of 8 billion people, only 1.4 billion feel safe from disasters. For the rest, every day is a battle against uncertainty.
          </p>
          <div className="flex justify-center mt-8">
            {/* Typewriter Effect */}
            <div className="w-full h-30 bg-white-300 rounded-lg flex items-center justify-center">
              <p className="text-white-900 text-3xl lg:text-5xl font-bold">
                {displayedText.split("HOPE")[0]}
                <span className="text-blue-400">HOPE</span>
                {displayedText.split("HOPE")[1]?.split("YOU")[0]}
                <span className="text-blue-400">YOU</span>
                {displayedText.split("YOU")[1]}
                {showCursor && <span className="blinking-cursor">|</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Impact of $5 Donation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Your $5 Can Do
          </h2>
          <p className="text-lg text-gray-700">
            Just $5 provides one family with access to the Michael app, giving them the tools they need to stay safe.
          </p>
          <div className="flex justify-center mt-8">
            <BeforeAfterVisual />
          </div>
        </div>

        {/* Section 4: Where Your $1 Monthly Goes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Journey of Every $1
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your $1 monthly donation helps empower communities with life-saving tools and sustainable rebuilding solutions.
          </p>

          {/* Circles with Icons and Text */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {/* Circle 1 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaShieldAlt className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                PROACTIVE DISASTER RISK REDUCTION
              </h3>
            </div>

            {/* Circle 2 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaTools className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                EQUIP LOCAL RESPONDERS WITH TOOLS
              </h3>
            </div>

            {/* Circle 3 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaSatelliteDish className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                DEVELOP ADVANCED TECHNOLOGIES
              </h3>
            </div>

            {/* Circle 4 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaCity className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                REBUILD COMMUNITIES TO BE SAFER
              </h3>
            </div>

            {/* Circle 5 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaUserFriends className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                CONNECT EXPERTS AND LOCALS
              </h3>
            </div>

            {/* Circle 6 */}
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-40 h-40 p-4 shadow-md">
              <FaHandsHelping className="text-blue-600 text-4xl mb-2" />
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                DISASTER RESPONSE PROGRAMS
              </h3>
            </div>
          </div>
        </div>

        {/* Section 6: Call to Action with Donation Boxes */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-12 mb-12 w-full max-w-6xl">
          <h2 className="text-4xl font-bold mb-8">
            One Small Step for You, One Giant Leap for Safety
          </h2>
          <p className="text-lg mb-12">
            One donation. Countless lives changed. A safer world for all. Choose a donation tier and help us save lives.
          </p>

          {/* Three Equal-Sized Donation Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FaUserShield className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">$5 = Access for one person</h3>
              <p className="text-gray-700 mb-4">Provide one person with access to the Michael app for disaster preparedness.</p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all">
                  Donate Now
                </button>
              </a>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FaUsers className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">$10 = Access for two people</h3>
              <p className="text-gray-700 mb-4">Help two people prepare for disasters with the Michael app and a chance to stay safe.</p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all">
                  Donate Now
                </button>
              </a>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <FaSchool className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">$50 = Community Safety</h3>
              <p className="text-gray-700 mb-4">Provide safety training for 10 individuals in vulnerable communities.</p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all">
                  Donate Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DonationSection;