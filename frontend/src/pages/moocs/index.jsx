import React from "react";
import TrainingRequestForm from "../../components/RequestForm";
import Heading from "../../components/Heading";
const Moocs = () => {
  return (
    <div className="container mx-auto p-6">
          <Heading
        title="MOOCS"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <p className="text-white mb-6 text-center">
        Access our online courses at your own pace. Fill out the form below to request access to our MOOCs.
      </p>
      <TrainingRequestForm trainingType="MOOCs" />
    </div>
  );
};

export default Moocs;