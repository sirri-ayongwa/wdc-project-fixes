import { loading } from "../assets";
import WDC from "../assets/images/wdcimage.png";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-8 h-8 mr-4" src={WDC} alt="Loading" />
      Discover Michael
    </div>
  );
};

export default Generating;
