import { Circle } from "@mui/icons-material";
import { Adjust } from "@mui/icons-material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

export default DropdownItem;