import React from "react";

const PreferredLanguageDate = ({ onLanguageChange, onDateChange }) => {
  const europeanLanguages = [
    "English",
    "French",
    "German",
    "Spanish",
    "Italian",
    "Dutch",
    "Portuguese",
    "Swedish",
    "Danish",
    "Finnish",
    "Greek",
    "Polish",
    "Czech",
    "Hungarian",
    "Romanian",
  ];

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Preferred Language</label>
        <select
          onChange={(e) => onLanguageChange(e.target.value)}
          className="w-full border rounded-lg p-2"
          required
        >
          <option value="">Select a Language</option>
          {europeanLanguages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Preferred Date</label>
        <input
          type="date"
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
    </>
  );
};

export default PreferredLanguageDate;