import { Link, useNavigate } from "react-router-dom";
import { loading } from "../assets";
import WDC from "../assets/images/wdcimage.png";

const Generating = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Link
      to="/request-demo"
      className={` flex items-center justify-center h-[3.5rem] px-6 bg-transparent rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* <img className="w-8 h-8 mr-4" src={WDC} alt="Loading" /> */}
      <div
        className="discover-button h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] 
      group group-hover:before:duration-500 group-hover:after:duration-500 
      after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#1c2baf] 
      duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 
      hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  
      origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 
      text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
      before:right-1 before:top-1  before:bg-blue-500 before:rounded-full before:blur-lg  after:absolute 
      after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full 
      after:blur-lg flex  items-center justify-center cursor-pointer decoration-0"
      >
        <span
          className="text-white font-bold text-xl no-underline z-50 text-span-discover"
          style={{ textDecoration: "none" }}
        >
          Discover Michael
        </span>
      </div>
    </Link>
  );
};

export default Generating;
