// import Section from "../../components/Section";
// import Heading from "../../components/Heading";

// function ImpactPage() {
//   return (
//     <Section className="overflow-hidden" id="membership">
//       <div className="container flex flex-col justify-center items-center">
//         {/* Heading */}
//         <Heading
//           tag="Success Stories"
//           title="Impact"
//           text="This is a teset"
//         />

//       </div>

//     </Section>
//   );
// }

// export default ImpactPage;
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { useState } from "react";
import { FaUserShield, FaUsers, FaSchool } from "react-icons/fa";
import WDCLogo from "../../assets/images/wdclogobg.png";
import GHTCLogo from "../../assets/images/GHTC.jpeg";
import banner from "../../assets/images/workshop_banner.jpg";
import NewsLetter from "../../components/newsletter"; 


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

function ImpactPage() {
  // State to manage expanded section
  const [isExpanded, setIsExpanded] = useState(false);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section className="overflow-hidden" id="membership">
      <div className="container flex flex-col justify-center items-center">
        {/* Heading */}
        <Heading
          tag="Success Stories"
          title="Impact"
          text="Showcasing the impact of WDC’s solutions impelmented across various countries and continents."
        />

        {/* Country Button */}
        <button
          className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
            isExpanded ? "bg-blue-700" : ""
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Democratic Republic of Congo</span>
          <span className="flex items-center gap-2 text-sm text-white">
  Dec 2024 - Jan 2025 <span className="pl-2">{isExpanded ? "▲" : "▼"}</span>
</span>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
            {/* Image Banner */}
            <div className="w-full mb-6">
              <img
                src={banner}
                alt="DRC Workshop"
                className="w-full h-64 rounded-lg object-cover"
              />
            </div>

            {/* Project Details */}
            <h2 className="text-blue-700 font-bold text-2xl mb-6">
              Michael: Global Disaster Monitoring and Alert System Implementation
            </h2>
            <p className="text-gray-700 mb-6">
            The World Disaster Center (WDC) successfully executed a one-month pilot disaster management program in Kinshasa, the capital of the Democratic Republic of Congo (DRC) — the second-largest country in Africa. Conducted in collaboration with the Global Hub of Technology in Congo (GHTC), the initiative aimed to empower local communities, humanitarian organizations, and partners to strengthen disaster preparedness through the use of Michael, WDC’s innovative, real-time disaster monitoring and alert solution.
            </p>

            {/* Logos Section */}
            <div className="flex items-center justify-around mb-8">
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                <img
                  src={WDCLogo}
                  alt="World Disaster Center Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
                <img
                  src={GHTCLogo}
                  alt="GHTC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Contact Information in Table Format */}
            <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <tbody>
              <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Project Title
                  </th>
                  <td className="py-4 px-6 text-gray-700">Michael: Global Disaster and Monitoring Alert System</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Coverage Period
                  </th>
                  <td className="py-4 px-6 text-gray-700">19 December 2024 - 16 January 2025</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Country of Implementation
                  </th>
                  <td className="py-4 px-6 text-gray-700">Democratic Republic of Congo</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Project Leader Organization
                  </th>
                  <td className="py-4 px-6 text-gray-700">World Disaster Center (WDC)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Contact Person
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Sapiens Ndatabaye<br />
                    <strong>Tel:</strong> +43 660 949 3057<br />
                    <strong>Email:</strong> sndatabaye@worlddisastercenter.org
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Local Implementation Organization
                  </th>
                  <td className="py-4 px-6 text-gray-700">Global Hub of Technology in Congo (GHTC)</td>
                </tr>
                <tr>
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">Contact Person</th>
                  <td className="py-4 px-6 text-gray-700">
                    Ormiel Maganga<br />
                    <strong>Email:</strong> magnamwenge@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
              {/* View Media Gallery Button */}
              <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                View Media Gallery
              </button>

              {/* View Final Implementation Report Button */}
              <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                View Technical Report
              </button>
            </div>
          </div>
        )}

        {/* Modal for Coming Soon */}
        {isModalOpen && <Modal onClose={closeModal} />}

        {/* Donation Section */}
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
      <Section>
  <div className="container">
      <NewsLetter />
  </div>
</Section>
    </Section>
    
  );

}

export default ImpactPage;
