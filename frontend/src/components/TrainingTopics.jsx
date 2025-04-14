import React from "react";

const TrainingTopics = ({ topics, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Training Topic</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full border rounded-lg p-2"
        required
      >
        <option value="">Select a Training Topic</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TrainingTopics;