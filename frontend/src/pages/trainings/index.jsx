
import { trainings } from "../../assets/data/training";


const Training = () => {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Training Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={training.image}
                alt={training.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{training.title}</h2>
              <p className="text-gray-600 mb-4">{training.description}</p>
              <a
                href={training.link}
                className="text-blue-500 hover:underline font-medium"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Training;