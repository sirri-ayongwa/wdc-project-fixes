import { strategicpartner_companyLogos } from "../constants";
import { collaborator_companyLogos } from "../constants";
import { technicalsponsor_companyLogos } from "../constants";
import { implmentationpartner_companyLogos } from "../constants";
import { financialpartner_companyLogos } from "../constants";
import { technicalpartner_companyLogos } from "../constants";

// import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">

      </h5>
      <ul className="flex">
        {strategicpartner_companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
