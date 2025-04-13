import { trainings } from "../../assets/data/training";
import Heading from "../../components/Heading";
import Section from "../../components/Section";

const Training = () => {
  return (
    <div className="container mx-auto p-6">
      <Heading
        title="Training Programs"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-white mb-4 rounded-lg shadow-md overflow-hidden p-6"
          >
            <div className="mb-4">
              <img
                src={training.image}
                alt={training.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <h2 className="text-xl text-emerald-950  mb-4 text-center">
              {training.title}
            </h2>
            <p className="text-emerald-950 mb-6 text-center">
              {training.description}
            </p>
            <div className="flex justify-center">
              <a
                href={training.link}
                className="text-blue-500 hover:underline font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;