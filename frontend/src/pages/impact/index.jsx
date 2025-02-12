// import Section from "../../components/Section";
// import Heading from "../../components/Heading";
// import { useState } from "react";
// import { FaUserShield, FaUsers, FaSchool } from "react-icons/fa";
// import WDCLogo from "../../assets/images/wdclogobg.png";
// import GHTCLogo from "../../assets/images/GHTC.jpeg";
// import banner from "../../assets/images/workshop_banner.jpg";
// import burundi from "../../assets/images/burundi-national.jpg";
// import NewsLetter from "../../components/newsletter";

// // Modal Component
// function Modal({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-6 text-center">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Coming Soon</h2>
//         <p className="text-gray-600 mb-6">
//           We are working on releasing this soon. Stay tuned!
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// function ImpactPage() {
//   // Individual states for each collapsible section
//   // const [isMadagascarExpanded, setIsMadagascarExpanded] = useState(false);
//   const [isBurundiExpanded, setIsBurundiExpanded] = useState(false);
//   const [isDRCExpanded, setIsDRCExpanded] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to open modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Section className="overflow-hidden" id="membership">
//       <div className="container flex flex-col justify-center items-center">
//         {/* Heading */}
//         <Heading
//           tag="Success Stories"
//           title="Impact"
//           text="Showcasing the impact of WDC’s solutions implemented across various countries and continents."
//         />

//         {/* Madagascar Section */}
//         {/* <button
//           className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
//             isMadagascarExpanded ? "bg-blue-700" : ""
//           }`}
//           onClick={() => setIsMadagascarExpanded(!isMadagascarExpanded)}
//         >
//           <span>Madagascar</span>
//           <span className="flex items-center gap-2 text-sm text-white">
//             Coming Soon <span className="pl-2">{isMadagascarExpanded ? "▲" : "▼"}</span>
//           </span>
//         </button> */}

//         {/* Burundi Section */}
//         <button
//           className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
//             isBurundiExpanded ? "bg-blue-700" : ""
//           }`}
//           onClick={() => setIsBurundiExpanded(!isBurundiExpanded)}
//         >
//           <span>Burundi</span>
//           <span className="flex items-center gap-2 text-sm text-white">
//             Feb 2025 - Mar 2025 <span className="pl-2">{isBurundiExpanded ? "▲" : "▼"}</span>
//           </span>
//         </button>

//         {isBurundiExpanded && (
//                 <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
//                   {/* Image Banner */}
//                   <div className="w-full mb-6">
//                     <img
//                       src={burundi}
//                       alt="DRC Workshop"
//                       className="w-full h-64 rounded-lg object-cover"
//                     />
//                   </div>
      
//                   {/* Project Details */}
//                   <h2 className="text-blue-700 font-bold text-2xl mb-6">
//                     Michael: Global Disaster Monitoring and Alert System Implementation
//                   </h2>
//                   <p className="text-gray-700 mb-6">
//                   The World Disaster Center (WDC) is currently on the ground in Burundi to execute a one-month pilot program in one of Africa’s most disaster-prone countries. This mission is dedicated to empowering local communities, humanitarian organizations, and key partners by enhancing disaster preparedness and response. At the heart of this initiative is Michael, WDC’s real-time disaster monitoring and alert platform, designed to provide early warnings, improve coordination, and mitigate the impact of crises before they escalate.
//                   </p>
      
//                   {/* Logos Section */}
//                   <div className="flex items-center justify-around mb-8">
//                     <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
//                       <img
//                         src={WDCLogo}
//                         alt="World Disaster Center Logo"
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     {/* <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
//                       <img
//                         src={GHTCLogo}
//                         alt="GHTC Logo"
//                         className="w-full h-full object-contain"
//                       />
//                     </div> */}
//                   </div>
      
//                   {/* Contact Information in Table Format */}
//                   <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
//                     <tbody>
//                     <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Project Title
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">Michael: Global Disaster and Monitoring Alert System</td>
//                       </tr>
//                       <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Coverage Period
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">3 February 2025 - 3 March 2025</td>
//                       </tr>
//                       <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Country of Implementation
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">Burundi</td>
//                       </tr>
//                       <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Project Leader Organization
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">World Disaster Center (WDC)</td>
//                       </tr>
//                       <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Contact Person
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">
//                           Rolande Namegabe<br />
//                           <strong>Email:</strong> rnamegabe@worlddisastercenter.org<br />
//                           Sheila Ndamama<br />
//                           <strong>Email:</strong> sndamama@worlddisastercenter.org<br />
//                         </td>
//                       </tr>
//                       {/* <tr className="border-b border-gray-300">
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                           Local Implementation Organization
//                         </th>
//                         <td className="py-4 px-6 text-gray-700">Global Hub of Technology in Congo (GHTC)</td>
//                       </tr> */}
//                       {/* <tr>
//                         <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">Local Implementation Contact Person</th>
//                         <td className="py-4 px-6 text-gray-700">
//                           Ormiel Maganga<br />
//                           <strong>Email:</strong> magnamwenge@gmail.com
//                         </td>
//                       </tr> */}
//                     </tbody>
//                   </table>
      
//                   {/* Buttons Section */}
//                   <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
//                     {/* View Media Gallery Button */}
//                     {/* <button
//                       onClick={openModal}
//                       className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
//                     >
//                       View Media Gallery
//                     </button> */}
      
//                     {/* View Final Implementation Report Button */}
//                     {/* <button
//                       onClick={openModal}
//                       className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
//                     >
//                       Final Report
//                     </button> */}
//                   </div>
//                 </div>
//               )}

//         {/* Democratic Republic of Congo Section */}
//         <button
//           className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
//             isDRCExpanded ? "bg-blue-700" : ""
//           }`}
//           onClick={() => setIsDRCExpanded(!isDRCExpanded)}
//         >
//           <span>Democratic Republic of Congo</span>
//           <span className="flex items-center gap-2 text-sm text-white">
//             Dec 2024 - Jan 2025 <span className="pl-2">{isDRCExpanded ? "▲" : "▼"}</span>
//           </span>
//         </button>

//         {isDRCExpanded && (
//               <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
//                 {/* Image Banner */}
//                 <div className="w-full mb-6">
//                   <img
//                     src={banner}
//                     alt="DRC Workshop"
//                     className="w-full h-64 rounded-lg object-cover"
//                   />
//                 </div>
    
//                 {/* Project Details */}
//                 <h2 className="text-blue-700 font-bold text-2xl mb-6">
//                   Michael: Global Disaster Monitoring and Alert System Implementation
//                 </h2>
//                 <p className="text-gray-700 mb-6">
//                 The World Disaster Center (WDC) successfully executed a one-month pilot disaster management program in Kinshasa, the capital of the Democratic Republic of Congo (DRC) — the second-largest country in Africa. Conducted in collaboration with the Global Hub of Technology in Congo (GHTC), the initiative aimed to empower local communities, humanitarian organizations, and partners to strengthen disaster preparedness through the use of Michael, WDC’s innovative, real-time disaster monitoring and alert solution.
//                 </p>
    
//                 {/* Logos Section */}
//                 <div className="flex items-center justify-around mb-8">
//                   <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md overflow-hidden">
//                     <img
//                       src={WDCLogo}
//                       alt="World Disaster Center Logo"
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <div className="w-40 h-40 bg-gray-800 flex items-center justify-center rounded-md overflow-hidden">
//                     <img
//                       src={GHTCLogo}
//                       alt="GHTC Logo"
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
    
//                 {/* Contact Information in Table Format */}
//                 <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
//                   <tbody>
//                   <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Project Title
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">Michael: Global Disaster and Monitoring Alert System</td>
//                     </tr>
//                     <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Coverage Period
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">19 December 2024 - 19 January 2025</td>
//                     </tr>
//                     <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Country of Implementation
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">Democratic Republic of Congo</td>
//                     </tr>
//                     <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Project Leader Organization
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">World Disaster Center (WDC)</td>
//                     </tr>
//                     <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Contact Person
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">
//                         Sapiens Ndatabaye<br />
//                         <strong>Email:</strong> sndatabaye@worlddisastercenter.org
//                       </td>
//                     </tr>
//                     <tr className="border-b border-gray-300">
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
//                         Local Implementation Organization
//                       </th>
//                       <td className="py-4 px-6 text-gray-700">Global Hub of Technology in Congo (GHTC)</td>
//                     </tr>
//                     <tr>
//                       <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">Contact Person</th>
//                       <td className="py-4 px-6 text-gray-700">
//                         Ormiel Maganga<br />
//                         <strong>Email:</strong> magnamwenge@gmail.com
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
    
//                 {/* Buttons Section */}
//                 <div className="flex justify-center mt-8">
//                   {/* View Media Gallery Button */}
//                   {/* <button
//                     onClick={openModal}
//                     className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
//                   >
//                     View Media Gallery
//                   </button> */}
    
//                   {/* View Final Implementation Report Button */}
//                   <button
//                     onClick={openModal}
//                     className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
//                   >
//                     Final Report
//                   </button>
//                 </div>
//               </div>
//             )}
    

//         {/* Modal for Coming Soon */}
//         {isModalOpen && <Modal onClose={closeModal} />}

//       </div>

//       <Section>
//         <div className="container">
//           <NewsLetter />
//         </div>
//       </Section>
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
import burundi from "../../assets/images/burundi-national.jpg";
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
  // States for each collapsible section
  const [isMadagascarExpanded, setIsMadagascarExpanded] = useState(false);
  const [isHaitiExpanded, setIsHaitiExpanded] = useState(false);
  const [isBurundiExpanded, setIsBurundiExpanded] = useState(false);
  const [isDRCExpanded, setIsDRCExpanded] = useState(false);

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Section className="overflow-hidden" id="membership">
      <div className="container flex flex-col justify-center items-center">
        {/* Heading */}
        <Heading
          tag="Success Stories"
          title="Impact"
          text="Showcasing the impact of WDC’s solutions implemented across various countries and continents."
        />

        {/* === Interactive Map Placeholder === */}
        {/* 
            Here you can integrate a map library or custom SVG to highlight countries.
            For example, with react-simple-maps or Leaflet. 
            This is just a placeholder below. Replace/modify as needed.
        */}
        {/* <div className="w-full max-w-6xl mb-10">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-700 font-semibold">Interactive Map Placeholder</p>
            <p className="text-gray-500">Insert your CADRI-like map here.</p>
          </div>
        </div> */}

        {/* === Madagascar Section (In Progress) === */}
        {/* <button
          className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
            isMadagascarExpanded ? "bg-blue-700" : ""
          }`}
          onClick={() => setIsMadagascarExpanded(!isMadagascarExpanded)}
        >
          <span>Madagascar</span>
          <span className="flex items-center gap-2 text-sm text-white">
            In Progress <span className="pl-2">{isMadagascarExpanded ? "▲" : "▼"}</span>
          </span>
        </button>

        {isMadagascarExpanded && (
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
            <h2 className="text-blue-700 font-bold text-2xl mb-4">
              Madagascar Project (Details Coming Soon)
            </h2>
            <p className="text-gray-700 mb-6">
              This section is under development. More information will be added
              here as the project progresses.
            </p>
          </div>
        )} */}

        {/* === Haiti Section (In Progress) === */}
        {/* <button
          className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
            isHaitiExpanded ? "bg-blue-700" : ""
          }`}
          onClick={() => setIsHaitiExpanded(!isHaitiExpanded)}
        >
          <span>Haiti</span>
          <span className="flex items-center gap-2 text-sm text-white">
            In Progress <span className="pl-2">{isHaitiExpanded ? "▲" : "▼"}</span>
          </span>
        </button>

        {isHaitiExpanded && (
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
            <h2 className="text-blue-700 font-bold text-2xl mb-4">
              Haiti Project (Details Coming Soon)
            </h2>
            <p className="text-gray-700 mb-6">
              This section is under development. More information will be added
              here as the project progresses.
            </p>
          </div>
        )} */}

        {/* === Burundi Section (In Progress) === */}
        <button
          className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
            isBurundiExpanded ? "bg-blue-700" : ""
          }`}
          onClick={() => setIsBurundiExpanded(!isBurundiExpanded)}
        >
          <span>Burundi</span>
          <span className="flex items-center gap-2 text-sm text-white">
            In Progress <span className="pl-2">{isBurundiExpanded ? "▲" : "▼"}</span>
          </span>
        </button>

        {isBurundiExpanded && (
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-6xl mb-12">
            {/* Image Banner */}
            <div className="w-full mb-6">
              <img
                src={burundi}
                alt="Burundi Workshop"
                className="w-full h-64 rounded-lg object-cover"
              />
            </div>

            {/* Project Details */}
            <h2 className="text-blue-700 font-bold text-2xl mb-6">
              Michael: Global Disaster Monitoring and Alert System Implementation
            </h2>
            <p className="text-gray-700 mb-6">
              The World Disaster Center (WDC) is currently on the ground in Burundi to
              execute a one-month pilot program in one of Africa’s most disaster-prone
              countries. This mission is dedicated to empowering local communities,
              humanitarian organizations, and key partners by enhancing disaster preparedness
              and response. At the heart of this initiative is Michael, WDC’s real-time
              disaster monitoring and alert platform, designed to provide early warnings,
              improve coordination, and mitigate the impact of crises before they escalate.
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
            </div>

            {/* Contact Information in Table Format */}
            <table className="table-auto w-full text-left border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Project Title
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Michael: Global Disaster and Monitoring Alert System
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Coverage Period
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    3 February 2025 - 3 March 2025
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Country of Implementation
                  </th>
                  <td className="py-4 px-6 text-gray-700">Burundi</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Project Leader Organization
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    World Disaster Center (WDC)
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Contact Person
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Rolande Namegabe<br />
                    <strong>Email:</strong> rnamegabe@worlddisastercenter.org<br />
                    Sheila Ndamama<br />
                    <strong>Email:</strong> sndamama@worlddisastercenter.org<br />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
              {/* Example: Coming soon feature */}
              {/* <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                View Media Gallery
              </button> */}
              {/* <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                Final Report
              </button> */}
            </div>
          </div>
        )}

        {/* === Democratic Republic of Congo Section (Completed) === */}
        <button
          className={`w-full max-w-6xl bg-blue-600 text-white text-lg font-semibold py-6 rounded-lg mb-8 flex justify-between items-center px-8 shadow-md ${
            isDRCExpanded ? "bg-blue-700" : ""
          }`}
          onClick={() => setIsDRCExpanded(!isDRCExpanded)}
        >
          <span>Democratic Republic of Congo</span>
          <span className="flex items-center gap-2 text-sm text-white">
            Completed <span className="pl-2">{isDRCExpanded ? "▲" : "▼"}</span>
          </span>
        </button>

        {isDRCExpanded && (
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
              The World Disaster Center (WDC) successfully executed a one-month pilot 
              disaster management program in Kinshasa, the capital of the Democratic 
              Republic of Congo (DRC). Conducted in collaboration with the Global 
              Hub of Technology in Congo (GHTC), the initiative aimed to empower 
              local communities, humanitarian organizations, and partners to 
              strengthen disaster preparedness through the use of Michael, 
              WDC’s innovative, real-time disaster monitoring and alert solution.
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
              <div className="w-40 h-40 bg-gray-800 flex items-center justify-center rounded-md overflow-hidden">
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
                  <td className="py-4 px-6 text-gray-700">
                    Michael: Global Disaster and Monitoring Alert System
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Coverage Period
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    19 December 2024 - 19 January 2025
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Country of Implementation
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Democratic Republic of Congo
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Project Leader Organization
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    World Disaster Center (WDC)
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Contact Person
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Sapiens Ndatabaye<br />
                    <strong>Email:</strong> sndatabaye@worlddisastercenter.org
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Local Implementation Organization
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Global Hub of Technology in Congo (GHTC)
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-6 text-gray-700 font-bold bg-blue-100">
                    Contact Person
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    Ormiel Maganga<br />
                    <strong>Email:</strong> magnamwenge@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Buttons Section */}
            <div className="flex justify-center mt-8">
              {/* View Media Gallery Button (example) */}
              {/* <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                View Media Gallery
              </button> */}
              
              {/* View Final Implementation Report Button */}
              <button
                onClick={openModal}
                className="w-full md:w-auto bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800 transition-all"
              >
                Final Report
              </button>
            </div>
          </div>
        )}

        {/* Modal for Coming Soon */}
        {isModalOpen && <Modal onClose={closeModal} />}
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
