
import { Adjust } from "@mui/icons-material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DropdownItem = ({ title, routings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={toggleDropdown}
        type="button"
        className={`inline-flex items-center px-1   leading-2 text-base  bg-transparent py-2 space-x-1 font-light text-gray-50 ${isOpen && 'text-n-3' } hover:text-n-3`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>

      {isOpen && (
        <div
          ref={popupRef}
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
          role="menu"
          aria-orientation="vertical"
          style={{ transformOrigin: "bottom" }}
        >
          {/* Triangle pointer above the dropdown */}
          <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t-2 border-l-2 border-n-2  rotate-45 rounded-t rounded-l transform origin-center "></div>
          <div className="py-5">
            {Object.entries(routings).map(([item, path], index) => (
              <Link
                key={index}
                to={path}
                className="block px-4 py-2 text-sm font-normal text-n-7 hover:text-n-4"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                <Adjust fontSize="8"/> {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  routings: PropTypes.object.isRequired
};

export default DropdownItem;




















// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Circle, ArrowRight } from "lucide-react";
// import PropTypes from 'prop-types';
// import wdcImage from "../assets/images/wdcimage.png";

// const MegaDropdown = ({ routingData, onClose, title }) => {
//   // State for featured content
//   const [featuredIndex, setFeaturedIndex] = useState(0);
  
//   // Featured content items - could be moved to constants or fetched from API
//   const featuredItems = [
//     {
//       type: "Solution",
//       title: "Early Warning Systems",
//       description: "Advanced technology that provides timely alerts for incoming disasters.",
//       image: wdcImage,
//       link: "/solutions/early-warning"
//     },
//     {
//       type: "Event",
//       title: "Disaster Preparedness Workshop",
//       description: "Join experts to learn essential skills for emergency situations.",
//       image: wdcImage,
//       link: "/events/preparedness-workshop"
//     },
//     {
//       type: "Resource",
//       title: "Emergency Response Toolkit",
//       description: "Essential resources for communities facing crisis situations.",
//       image: wdcImage,
//       link: "/resources/emergency-toolkit"
//     }
//   ];

//   // Rotate featured content every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFeaturedIndex((prev) => (prev + 1) % featuredItems.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [featuredItems.length]);

//   // Current featured item
//   const currentFeatured = featuredItems[featuredIndex];

//   // Group links by category based on the title prop
//   const getGroupedLinks = () => {
//     const entries = Object.entries(routingData);
    
//     // Define groupings based on the dropdown title
//     let groups = [];
    
//     if (title === "What We Do") {
//       groups = [
//         { title: "Programs", links: [] },
//         { title: "Services", links: [] },
//         { title: "Initiatives", links: [] }
//       ];
//     } else if (title === "Get Involved") {
//       groups = [
//         { title: "Volunteer", links: [] },
//         { title: "Donate", links: [] },
//         { title: "Partner", links: [] }
//       ];
//     } else if (title === "Academy") {
//       groups = [
//         { title: "Courses", links: [] },
//         { title: "Training", links: [] },
//         { title: "Resources", links: [] }
//       ];
//     } else if (title === "Resources") {
//       groups = [
//         { title: "Publications", links: [] },
//         { title: "Tools", links: [] },
//         { title: "Data", links: [] }
//       ];
//     } else if (title === "About") {
//       groups = [
//         { title: "Organization", links: [] },
//         { title: "Team", links: [] },
//         { title: "Impact", links: [] }
//       ];
//     } else {
//       // Default grouping if title doesn't match
//       groups = [
//         { title: "Main Links", links: [] },
//         { title: "Additional Links", links: [] },
//         { title: "Related Links", links: [] }
//       ];
//     }
    
//     // Distribute links among groups
//     const linkCount = entries.length;
//     const groupCount = groups.length;
//     const linksPerGroup = Math.ceil(linkCount / groupCount);
    
//     entries.forEach((entry, index) => {
//       const groupIndex = Math.floor(index / linksPerGroup);
//       if (groupIndex < groupCount) {
//         groups[groupIndex].links.push(entry);
//       } else {
//         // Fallback for any extra links
//         groups[groupCount - 1].links.push(entry);
//       }
//     });
    
//     // Remove empty groups
//     return groups.filter(group => group.links.length > 0);
//   };

//   const groups = getGroupedLinks();

//   return (
//     <div className="fixed left-0 right-0 mt-5 z-50">
//       <div className="container mx-auto px-4">
//         <div className="overflow-hidden rounded-lg shadow-md bg-blue-950 ring-1 ring-black ring-opacity-5 max-w-6xl mx-auto">
//           <div className="relative grid gap-6 p-6 grid-cols-4">
//             {groups.map((group, groupIndex) => (
//               <div key={groupIndex} className="col-span-1">
//                 <h4 className="text-sky-300 font-medium text-sm mb-2">
//                   {group.title}
//                 </h4>
//                 <hr className="border-t border-blue-800 mb-3" />
//                 <ul className="space-y-3">
//                   {group.links.map(([label, path], itemIndex) => (
//                     <li key={itemIndex} className="flow-root">
//                       <Link
//                         to={path}
//                         className="flex items-center p-1 text-white hover:text-sky-300 rounded-md transition-colors duration-200"
//                         onClick={onClose}
//                       >
//                         <Circle className="mr-2 h-2 w-2" />
//                         <span className="relative inline-block">
//                           {label}
//                           <span className="absolute left-0 right-0 bottom-0 h-px bg-sky-300 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
            
//             {/* Featured content area with animation */}
//             <div className="col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg overflow-hidden">
//               <div className="h-full flex flex-col justify-between">
//                 <div className="fade-in">
//                   <div className="flex items-center mb-2">
//                     <span className="text-xs font-semibold uppercase tracking-wider bg-blue-400 bg-opacity-30 text-white px-2 py-1 rounded">
//                       Featured {currentFeatured.type}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-lg font-semibold text-white mb-2">
//                     {currentFeatured.title}
//                   </h3>
                  
//                   <div className="relative mb-3 overflow-hidden rounded">
//                     <img 
//                       src={currentFeatured.image} 
//                       alt={currentFeatured.title}
//                       className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
//                     />
//                   </div>
                  
//                   <p className="text-sm text-gray-50 mb-4">
//                     {currentFeatured.description}
//                   </p>
//                 </div>
                
//                 <div className="mt-2">
//                   <Link
//                     to={currentFeatured.link}
//                     onClick={onClose}
//                     className="group flex items-center text-sm font-medium text-gray-100 hover:text-white transition-colors duration-200"
//                   >
//                     <span>Learn more</span>
//                     <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// MegaDropdown.propTypes = {
//   routingData: PropTypes.object.isRequired,
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired
// };

// export default MegaDropdown;

