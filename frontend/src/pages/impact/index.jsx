import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { useState } from "react";
import { FaUserShield, FaUsers, FaSchool } from "react-icons/fa";
import WDCLogo from "../../assets/images/wdclogobg.png";
import GHTCLogo from "../../assets/images/GHTC.jpeg";
import banner from "../../assets/images/workshop_banner.jpg";
import burundi from "../../assets/images/burundi.png";
import NewsLetter from "../../components/newsletter";

import Map from "../../components/Map";

import { impact } from "../../assets/data/impact";

// Modal Component
function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          We are working on releasing this soon. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

const statusColors = {
  "Completed": "#22c55e",  // Green
  "In Progress": "#facc15",  // Yellow
  "Upcoming": "#f97316",  // Orange
};


function ImpactPage() {
  // States for each collapsible section
  const [isMadagascarExpanded, setIsMadagascarExpanded] = useState(false);
  const [isHaitiExpanded, setIsHaitiExpanded] = useState(false);
  const [isBurundiExpanded, setIsBurundiExpanded] = useState(false);
  const [isDRCExpanded, setIsDRCExpanded] = useState(false);

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Section className="overflow-hidden" id="membership">
      <div className="container flex flex-col justify-center items-center">
        {/* Heading */}
        <Heading
          tag="Success Stories"
          title="Impact"
          text="Showcasing the impact of WDC’s solutions implemented across various countries and continents."
        />

        <div className="w-full h-full mb-10">
          <Map />
        </div>
        
        <div className="flex flex-col lg:flex-row  w-full m-4 mt-10">
          {Object.entries(impact).map(([status, countries], index) => (
            <div key={index} className="flex flex-col  w-full items-center text-center text-3xl p-4 font-bold">
              <div
                className="m-4 px-4 py-2 rounded-lg text-white"
                style={{ color: statusColors[status] || "#c0c0c0" }} // Default gray if not found
              >
                {status}
              </div>
              <div className="flex flex-col w-full items-center ">
                {countries.map((project, i) => (
                  <button 
                    key={i} 
                    className="text-xl font-semibold m-2 w-full p-4 rounded-md bg-blue-600 text-white"
                    onClick={() => {
                      setSelectedProject(project);
                    }}
                  >
                    {project.country}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL FOR PROJECT DETAILS */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              {/* Image Banner (Reduced Size) */}
              {selectedProject.banner && (
                <div className="w-full mb-4">
                  <img
                    src={selectedProject.banner}
                    alt={selectedProject.country}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Project Details */}
              <h2 className="text-blue-700 font-bold text-xl mb-4">
                {selectedProject.ProjectTitle || "No Title Available"}
              </h2>
              {selectedProject.description && <p className="text-gray-700 text-sm mb-4">{selectedProject.description}</p>}

              {/* Logos Section (Compact) */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="flex items-center justify-around mb-4">
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                      <img src={img} alt="Project Logo" className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Information in Table Format */}
              <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm text-sm">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Project Title</th>
                    <td className="py-2 px-4 text-gray-700">{selectedProject.ProjectTitle || "Not Available"}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Coverage Period</th>
                    <td className="py-2 px-4 text-gray-700">{selectedProject.CoveragePeriod || "Not Available"}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Country</th>
                    <td className="py-2 px-4 text-gray-700">{selectedProject.country}</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Project Leader Organization</th>
                    <td className="py-2 px-4 text-gray-700">{selectedProject.ProjectLeaderOrganization || "Not Available"}</td>
                  </tr>
                  {selectedProject.LocalImplementationOrganization && (
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Local Implementation Organization</th>
                      <td className="py-2 px-4 text-gray-700">{selectedProject.LocalImplementationOrganization || "Not Available"}</td>
                    </tr>
                  )}

                  

                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-4 text-gray-700 font-bold bg-blue-100">Contact Person</th>
                    <td className="py-2 px-4 text-gray-700">
                      {selectedProject.ContactPerson ? (
                        selectedProject.ContactPerson.map((person, idx) => (
                          <div key={idx} className="mb-1">
                            {person.name} <br />
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${person.email}`} className="text-blue-600">
                              {person.email}
                            </a>
                          </div>
                        ))
                      ) : (
                        "Not Available"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Section>
        <div className="container">
          <NewsLetter />
        </div>
      </Section>

    </Section>
  );
}

export default ImpactPage;
