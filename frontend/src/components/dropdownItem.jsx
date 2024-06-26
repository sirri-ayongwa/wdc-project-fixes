import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function DropdownItem({ title, routings, setOpenNavigation }) {
  const [toggled, setToggled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggled(false);
  }, [location]);

  return (
    <div className="">
      <div className="relative inline-block text-left">
        <div>
          <button
            onMouseEnter={() => setToggled(true)}
            onClick={() => {
              setToggled(!toggled);
            }}
            type="button"
            className="inline-flex whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2 font-semibold hover:bg-slate-950 text-gray-400 shadow-sm  hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {title}
            <svg
              className="-mr-1 h-5 w-5 text-gray-200"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          onMouseLeave={() => setToggled(false)}
          className={` ${
            toggled
              ? "transform opacity-100 scale-100"
              : "transform opacity-0 scale-95"
          } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {Object.keys(routings).map((item, index) => {
              return (
                <Link
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  onClick={() => setOpenNavigation(false)}
                  tabIndex="-1"
                  id={`menu-item-${index}`}
                  key={item}
                  to={routings[item]}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
