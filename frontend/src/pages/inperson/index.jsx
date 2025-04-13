import React from "react";
import TrainingRequestForm from "../../components/RequestForm";
import Heading from "../../components/Heading";
const InPerson = () => {
  return (
    <div className="container mx-auto p-6">
          <Heading
        title="In-Person Training"
        tag="World Disaster Center"
        className="mb-8"
        crosses
      />
      <p className="text-white mb-6 text-center">
        Our in-person training sessions are tailored to meet your needs. Fill out the form below to request a session.
      </p>
      <TrainingRequestForm trainingType="In-Person" />
    </div>
  );
};

export default InPerson;