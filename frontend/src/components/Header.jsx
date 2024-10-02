import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import WDC from "../assets/images/wdcimage.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import { CgPlayButton } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import DropdownItem from "./dropdownItem";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const auth = JSON.parse(localStorage.getItem("userAuth"));

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    } else {
      setOpenNavigation(true);
      // disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    // enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    setOpenNavigation(false);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <div className="flex whitespace-nowrap">
            <img src={WDC} width={90} height={30} alt="Brainwave" />
            <div className="flex flex-col items-center text-center align-center justify-center">
              <span className="logo-style-1">WORLD DISASTER</span>
              <span className="logo-style-2">CENTER</span>
            </div>
          </div>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem]  left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent opacity-90`}
        >
          <div className="relative gap-x-3 z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <Link
              onClick={() => setOpenNavigation(false)}
              to="/"
              style={{ zIndex: "9999" }}
              className="inline-flex whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold hover:bg-slate-950 text-gray-400 shadow-sm  hover:bg-gray-50"
            >
              Home
            </Link>
            <DropdownItem
              setOpenNavigation={setOpenNavigation}
              title="About Us"
              routings={{
                "Who we are": "/about",
                "Our vision": "/about/vision",
                "Our mission": "/about/mission",
                "Our values": "/about/values",
                Carreers: "/about/carreers",
              }}
            />

            <Link
              onClick={() => setOpenNavigation(false)}
              to="/blogs"
              style={{ zIndex: "9999" }}
              className="inline-flex whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold hover:bg-slate-950 text-gray-400 shadow-sm  hover:bg-gray-50"
            >
              Blogs
            </Link>
            <Link
              onClick={() => setOpenNavigation(false)}
              to="/team"
              style={{ zIndex: "9999" }}
              className="inline-flex whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold hover:bg-slate-950 text-gray-400 shadow-sm  hover:bg-gray-50"
            >
              Team
            </Link>
            <Link
              onClick={() => setOpenNavigation(false)}
              to="/contact"
              style={{ zIndex: "9999" }}
              className="inline-flex whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold hover:bg-slate-950 text-gray-400 shadow-sm  hover:bg-gray-50"
            >
              Contact Us
            </Link>
            {/* <DropdownItem
              setOpenNavigation={setOpenNavigation}
              title="Our Work"
              routings={{
                "Our services": "/services",
                "Our Projects": "/projects",
                Events: "/events",
              }}
            /> */}

            <Link
              onClick={() => setOpenNavigation(false)}
              to="/donate"
              className="inline-flex  whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold ring-1 rounded-2xl ring-n-6  hover:bg-n-6 text-gray-400 hover:text-white shadow-sm  hover:bg-n-6"
            >
              Donate
            </Link>

            <Link
              onClick={() => setOpenNavigation(false)}
              to="/signin"
              className="inline-flex lg:hidden whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold rounded-2xl  hover:bg-n-6 text-gray-400 hover:text-white shadow-sm  hover:bg-n-6"
            >
              {auth?.id ? "" : "signin"}
            </Link>

            <Link
              onClick={() => setOpenNavigation(false)}
              to="/signup"
              className="inline-flex lg:hidden whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold  rounded-2xl  hover:bg-n-6 text-gray-400 hover:text-white shadow-sm  hover:bg-n-6"
            >
              {auth?.id ? "" : "signup"}
            </Link>

            <Link
              onClick={() => setOpenNavigation(false)}
              to="/profile"
              className="inline-flex lg:hidden whitespace-nowrap justify-center gap-x-1.5 lg:text-lg my-4 text-2xl rounded-md bg-transparent px-3 py-2  font-semibold  rounded-2xl  hover:bg-n-6 text-gray-400 hover:text-white shadow-sm  hover:bg-n-6"
            >
              {auth?.id ? (
                <span className=" capitalize flex items-center">
                  <FaUser className="m-1" />
                  {auth?.email.split("@")[0]}
                </span>
              ) : (
                ""
              )}
            </Link>
          </div>

          <HamburgerMenu />
        </nav>

        {auth?.id ? (
          <>
            <Button
              className="hidden lg:flex whitespace-nowrap"
              href="/profile"
            >
              <span className=" capitalize flex items-center">
                <FaUser className="m-1" />
                {auth?.email.split("@")[0]}
              </span>
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/signup"
              className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
            >
              Sign up
            </Link>
            <Button className="hidden lg:flex" href="/signin">
              Sign in
            </Button>
          </>
        )}

        <Button
          className="ml-auto lg:hidden"
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
