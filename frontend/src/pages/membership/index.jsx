import React, { useState } from "react";
import Section from "../../components/Section";
import Heading from "../../components/Heading";

// Modal Component
function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Coming Soon</h2>
        <p className="text-gray-600 mb-6">We're working hard to bring this feature to you. Stay tuned!</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

const membershipData = {
  professionals: {
    title: "Experts & Disaster Specialists",
    description: `Are you a disaster expert, GIS/Remote Sensing Analyst, medical professional, policy advisor etc. contributing to disaster management? As a Professional Member, you'll have the opportunity to contribute to global disaster preparedness, response, and recovery efforts.`,
    benefits: [
      { name: "Who Can Join?", description: "Disaster experts, engineers, policy advisors, medical professionals, etc." },
      { name: "Key Contribution", description: "Provide expertise in disaster phases (Preparedness, Response, Recovery)." },
      { name: "Training Opportunities", description: "Lead virtual or in-person training sessions." },
      { name: "Networking", description: "Join a global network of disaster professionals." },
      { name: "Recognition", description: "Featured in WDC’s 'Experts Hub'." },
      { name: "Newsletter", description: "Yes" },
      { name: "Event Invitations", description: "Priority access to WDC conferences, workshops, and webinars." },
      { name: "Paid Opportunities", description: "Eligible for project-based disaster management roles." },
      { name: "Annual Membership Fee", description: "$20/year or 10 hours of pro bono service." },
    ],
  },
  locals: {
    title: "Locals & Community Members",
    description: `Are you a community member living in a disaster-prone area or someone passionate about building local disaster resilience? As a Local Member, you’ll receive training opportunities, participate in paid tasks such as reporting local disaster conditions, and join WDC’s community-driven efforts to strengthen preparedness and response at the local level.`,
    benefits: [
      { name: "Who Can Join?", description: "Individuals living in disaster-prone areas or interested in capacity-building." },
      { name: "Key Contribution", description: "Participate in local training, crowdsourcing tasks, and resilience initiatives." },
      { name: "Training Opportunities", description: "Receive free or discounted training from professionals." },
      { name: "Networking", description: "Connect with experts and peers for mentorship opportunities." },
      { name: "Recognition", description: "Earn certificates for completing training programs." },
      { name: "Newsletter", description: "No" },
      { name: "Event Invitations", description: "Invitations to local workshops and events." },
      { name: "Paid Opportunities", description: "Eligible for paid crowdsourcing tasks (e.g., local condition reporting)." },
      { name: "Annual Membership Fee", description: "Free or minimal fee (based on region)." },
    ],
  },
};

function MembershipPage() {
  const [activeTab, setActiveTab] = useState("professionals");
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const currentData = membershipData[activeTab];

  return (
    <Section className="overflow-hidden" id="membership">
      <div className="container flex flex-col justify-center items-center">
        {/* Heading */}
        <Heading
          tag="Join our membership"
          title="Become a WDC Member"
          text="Join a network of individuals and organizations working to strengthen global disaster resilience efforts. WDC membership is open to professionals and community members worldwide who are committed to ending disaster impacts globally."
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => handleTabChange("professionals")}
            className={`px-6 py-3 rounded-lg font-semibold ${
              activeTab === "professionals"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Professionals
          </button>
          <button
            onClick={() => handleTabChange("locals")}
            className={`px-6 py-3 rounded-lg font-semibold ${
              activeTab === "locals"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Locals
          </button>
        </div>

        {/* Membership Details */}
        <div className="mt-10 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 text-center">{currentData.title}</h2>
          <p className="mt-4 text-gray-600 text-center">{currentData.description}</p>

          {/* Benefits Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-3 text-gray-700 font-semibold">Benefits</th>
                  <th className="border border-gray-300 px-4 py-3 text-gray-700 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {currentData.benefits.map((benefit, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">{benefit.name}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">{benefit.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Apply Button */}
          <div className="mt-8 text-center">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Show Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </Section>
  );
}

export default MembershipPage;
