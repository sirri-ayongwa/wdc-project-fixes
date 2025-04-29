// import { Link, useLocation } from "react-router-dom";
// import WDC from "../assets/images/wdcimage.png";
// import { dropdownData } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import { useState, useEffect } from "react";
// import DropdownItem from "./dropdownItem";
// import LanguageDropdown from "./MultiLangue";
// import SearchButton from "./SearchButton";

// const Header = () => {
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//     } else {
//       setOpenNavigation(true);
//     }
//   };

//   useEffect(() => {
//     setOpenNavigation(false);
//   }, [pathname]);

//   return (
//     <div
//     className={`fixed top-0 left-0 w-full z-50   min-[1340px]:bg-n-8/90 min-[1340px]:backdrop-blur-sm ${
//         openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className=" container flex items-center justify-between  py-2">
//         <Link className="" to="/">
//           <div className="flex whitespace-nowrap gap-1">
//             <img src={WDC}  alt="Brainwave" className=" w-16 h-16" />
//             <div className="flex flex-col items-center text-center align-center justify-center">
//               <span className="logo-style-1">WORLD DISASTER</span>
//               <span className="logo-style-2">CENTER</span>
//             </div>
//           </div>
//         </Link>

//         <nav
//           className={`${
//             openNavigation ? "flex " : "hidden"
//           } fixed top-[5rem] left-0  right-0 bottom-0 bg-n-8 min-[1340px]:static min-[1340px]:flex min-[1340px]:bg-transparent opacity-90`}
//         >
//           <div className="relative w-full gap-x-1 z-2 flex flex-col items-center m-auto min-[1340px]:flex-row">
//             <Link
//               className="mr-4 text-white font-light hover:text-sky-300"
//               to ="/"
//             >
//               Home
//             </Link>
//             {dropdownData.map((dropdown, index) => (
//                 <DropdownItem
//                   key={index}
//                   setOpenNavigation={setOpenNavigation}
//                   title={dropdown.title}
//                   routings={dropdown.routings}
//                 />

                
//               ))}
//               <div className="flex   gap-4 items-center min-[1340px]:ml-4">
//               <Link
//               className="mr-4 text-white font-light hover:text-sky-300"
//               to ="/impact"
//             >
//               Impact
//             </Link>

//               <SearchButton/>
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
//                 <Link
//                   to = "https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
//                   target = "_blank"
//                 >
//                   Donate
//                 </Link>
//               </button>

//               <button  className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500 transition duration-300">
//                 <Link
//                   to = "/membership"
//                   // target = "_blank"
//                 >
//                   Membership
//                 </Link>
//               </button>
              
//              </div>
//           </div>
//           <HamburgerMenu />
       
        
//         </nav>
//         <Button
//           className="ml-auto min-[1340px]:hidden"
//           px="px-3"
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link, useLocation } from "react-router-dom";
import WDC from "../assets/images/wdcimage.png";
import { dropdownData } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import DropdownItem from "./dropdownItem";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  useEffect(() => {
    // Close navigation when the route changes
    setOpenNavigation(false);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 min-[1340px]:bg-n-8/90 min-[1340px]:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between py-2">
        <Link to="/">
          <div className="flex whitespace-nowrap gap-1">
            <img src={WDC} alt="Brainwave" className="w-16 h-16" />
            <div className="flex flex-col items-center justify-center text-center">
              <span className="logo-style-1">WORLD DISASTER</span>
              <span className="logo-style-2">CENTER</span>
            </div>
          </div>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 min-[1340px]:static min-[1340px]:flex min-[1340px]:bg-transparent opacity-90`}
        >
          <div className="relative w-full gap-x-1 z-2 flex flex-col items-center m-auto min-[1340px]:flex-row">
            {/* Home Link */}
            <Link
              className="mr-4 text-white font-light hover:text-sky-300"
              to="/"
            >
              Home
            </Link>
            
            {/* Dropdowns (About Us, What We Do, Resources, Get Involved) */}
            {dropdownData.map((dropdown, index) => (
              <DropdownItem
                key={index}
                setOpenNavigation={setOpenNavigation}
                title={dropdown.title}
                routings={dropdown.routings}
              />
            ))}
            
            {/* Impact below Get Involved */}
            <Link
              className="mr-4 text-white font-light hover:text-sky-300"
              to="/impact"
            >
              Impact
            </Link>

            {/* Optional: keep Search here if you want */}
            {/* <SearchButton /> */}

            {/* Donate button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              <Link
                to="https://wdc-donation.vercel.app"
                target="_blank"
              >
                Invest
              </Link>
            </button>

            {/* Membership immediately after Donate */}
            <button className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500 transition duration-300">
              <Link to="/membership">Membership</Link>
            </button>
          </div>
          <HamburgerMenu />
        </nav>

        {/* Mobile toggle button */}
        <Button
          className="ml-auto min-[1340px]:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;



// // Modified Header.jsx with hover functionality
// import { useState, useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Search, ChevronDown } from "lucide-react";
// import WDC from "../assets/images/wdcimage.png";
// import { dropdownData } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import MegaDropdown from "./dropdownItem";
// import SearchOverlay from "./SearchOverlay";

// const Header = () => {
//   const location = useLocation();
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const headerRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (headerRef.current && !headerRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Close navigation when route changes
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setActiveDropdown(null);
//   }, [location]);

//   // Clear timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   const handleMouseEnter = (title) => {
//     // Clear any existing timeout
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setActiveDropdown(title);
//   };

//   const handleMouseLeave = () => {
//     // Set a small delay before closing to prevent accidental closing
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 300); // 300ms delay
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     if (isMobileMenuOpen) {
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (isSearchOpen) {
//       setIsSearchOpen(false);
//     }
//   };

//   // Function to check if a given route is active
//   const isRouteActive = (routeObj) => {
//     if (!routeObj) return false;
    
//     // Check all routes in the dropdown
//     for (const path of Object.values(routeObj)) {
//       if (location.pathname === path) {
//         return true;
//       }
//     }
//     return false;
//   };

//   return (
//     <>
//       <div
//         ref={headerRef}
//         className={`fixed top-0 left-0 w-full z-40 min-[1340px]:bg-n-8/90 min-[1340px]:backdrop-blur-sm ${
//           isMobileMenuOpen ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//         }`}
//       >
//         <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <div className="flex whitespace-nowrap gap-1">
//               <img src={WDC} alt="World Disaster Center" className="w-16 h-16" />
//               <div className="flex flex-col items-center text-center align-center justify-center">
//                 <span className="logo-style-1">WORLD DISASTER</span>
//                 <span className="logo-style-2">CENTER</span>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6 ml-8">
//             {dropdownData.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="relative group"
//                 onMouseEnter={() => handleMouseEnter(item.title)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center font-light py-2 px-1 focus:outline-none transition-colors duration-200 ${
//                     activeDropdown === item.title || isRouteActive(item.routings)
//                       ? "text-sky-300" 
//                       : "text-white hover:text-sky-300"
//                   }`}
//                 >
//                   <span>{item.title}</span>
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform duration-200 ${
//                       activeDropdown === item.title ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {activeDropdown === item.title && (
//                   <div 
//                     onMouseEnter={() => {
//                       if (timeoutRef.current) {
//                         clearTimeout(timeoutRef.current);
//                       }
//                     }}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <MegaDropdown 
//                       routingData={item.routings} 
//                       onClose={() => setActiveDropdown(null)}
//                       title={item.title}
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Link
//               className={`font-light transition-colors duration-200 ${
//                 location.pathname === "/impact" 
//                   ? "text-sky-300" 
//                   : "text-white hover:text-sky-300"
//               }`}
//               to="/impact"
//             >
//               Impact
//             </Link>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center space-x-4 ml-auto">
//             <button 
//               onClick={toggleSearch}
//               className={`hover:text-sky-300 focus:outline-none transition-colors duration-200 ${
//                 isSearchOpen ? "text-sky-300" : "text-white"
//               }`}
//               aria-label="Search"
//             >
//               <Search className="h-5 w-5" />
//             </button>

//             <div className="hidden md:flex items-center space-x-3">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
//                 <Link
//                   to="https://wdc-donation.vercel.app"
//                   target="_blank"
//                 >
//                   Invest
//                 </Link>
//               </button>

//               <button className={`subscribe-btn relative overflow-hidden font-bold py-2 px-4 rounded ${
//                 location.pathname === "/membership"
//                   ? "bg-blue-100 text-blue-700 border border-blue-700"
//                   : "bg-white text-blue-500 border border-blue-500"
//               }`}>
//                 <Link to="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE" className="relative z-10">
//                   Subscribe
//                 </Link>
//                 <span className={`absolute inset-0 bg-blue-700 transform -translate-x-full transition-transform duration-500 ease-out ${
//                   location.pathname === "/membership" ? "" : "group-hover:translate-x-0"
//                 }`}></span>
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <Button
//               className="md:hidden"
//               px="px-3"
//               onClick={toggleMobileMenu}
//             >
//               <MenuSvg openNavigation={isMobileMenuOpen} />
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-n-8 overflow-y-auto z-40">
//             <div className="px-4 py-6 space-y-6">
//               {dropdownData.map((item, index) => (
//                 <div key={index}>
//                   <button
//                     onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
//                     className={`flex items-center justify-between w-full text-left py-2 ${
//                       activeDropdown === item.title || isRouteActive(item.routings)
//                         ? "text-sky-300" 
//                         : "text-white"
//                     }`}
//                   >
//                     <span>{item.title}</span>
//                     <ChevronDown
//                       className={`h-5 w-5 transition-transform ${
//                         activeDropdown === item.title ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
                  
//                   {activeDropdown === item.title && (
//                     <div className="mt-2 pl-4 space-y-2 border-l-2 border-gray-700">
//                       {Object.entries(item.routings).map(([label, path], i) => (
//                         <Link
//                           key={i}
//                           to={path}
//                           className={`block py-2 hover:text-white ${
//                             location.pathname === path
//                               ? "text-sky-300" 
//                               : "text-gray-300"
//                           }`}
//                           onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                           {label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               <Link 
//                 to="/impact" 
//                 className={`block py-2 ${
//                   location.pathname === "/impact" 
//                     ? "text-sky-300" 
//                     : "text-white"
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Impact
//               </Link>
              
//               <div className="pt-4 space-y-3">
//                 <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
//                   <Link
//                     to="https://wdc-donation.vercel.app"
//                     target="_blank"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Invest
//                   </Link>
//                 </button>

//                 <button className="subscribe-btn relative overflow-hidden w-full font-bold py-2 px-4 rounded">
//                   <Link 
//                     to="/membership"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`relative z-10 ${
//                       location.pathname === "/membership"
//                         ? "text-blue-700"
//                         : "text-blue-500 hover:text-white transition-colors duration-500"
//                     }`}
//                   >
//                     Subscribe
//                   </Link>
//                   <span className={`absolute inset-0 ${
//                     location.pathname === "https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
//                       ? "bg-blue-100 border border-blue-700"
//                       : "bg-white border border-blue-500"
//                   }`}></span>
//                   <span className="absolute inset-0 bg-blue-700 transform -translate-x-full transition-transform duration-500 ease-out hover:translate-x-0"></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Search Overlay */}
//       {isSearchOpen && <SearchOverlay onClose={toggleSearch} />}

//       {/* Spacer for fixed header */}
//       <div className="h-16"></div>
//     </>
//   );
// };

// export default Header;

