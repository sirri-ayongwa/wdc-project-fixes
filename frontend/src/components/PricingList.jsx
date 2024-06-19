import { Link } from "react-router-dom";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap justify-around">
      
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">Give us Feedback</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            let us know how we can improve !
          </p>

          <Link
            className="w-full mb-6"
            to="/contact"
            // white={!!item.price}
          >
            More Info
          </Link>

        </div>
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">Become a stakeholder</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            join us to always be ahead .
          </p>

          <Link
            className="w-full mb-6"
            to="/donate"
            // white={!!item.price}
          >
            More Info
          </Link>

        </div>

        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">Fund our work</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            consider supporting our work !
          </p>

          <Link
            className="w-full mb-6"
            to="/donate"
            // white={!!item.price}
          >
            {/* {item.price ? "Get started" : "Contact us"} */}
            Donate
          </Link>
        </div>
    </div>
  );
};

export default PricingList;
