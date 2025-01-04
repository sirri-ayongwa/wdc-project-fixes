import React from "react";
import DollarIcon from "../assets/images/donate_money.png"; // Icon for $5
import AppIcon from "../assets/images/michael_logo.png"; // Icon for Michael App Access
import SafetyIcon from "../assets/images/family_icon.jpg"; // Icon for Increased Safety
import ArrowIcon from "../assets/images/arrow_icon.png"; // Icon for arrow

function BeforeAfterVisual() {
  return (
    <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center p-8 animate-fadeIn">
      <div className="flex items-center space-x-8">
        {/* $5 Section */}
        <div className="flex flex-col items-center">
          <img src={DollarIcon} alt="Dollar Icon" className="w-16 h-16 mb-2" />
          <h3 className="text-3xl font-bold text-gray-900">$5</h3>
        </div>

        {/* Arrow Icon */}
        <img src={ArrowIcon} alt="Arrow Icon" className="w-8 h-4" />

        {/* Michael App Access Section */}
        <div className="flex flex-col items-center">
          <img src={AppIcon} alt="App Icon" className="w-16 h-16 mb-2" />
          <h3 className="text-2xl font-semibold text-gray-900">Michael App Access</h3>
        </div>

        {/* Arrow Icon */}
        <img src={ArrowIcon} alt="Arrow Icon" className="w-8 h-4" />

        {/* Increased Safety Section */}
        <div className="flex flex-col items-center">
          <img src={SafetyIcon} alt="Safety Icon" className="w-16 h-16 mb-2" />
          <h3 className="text-2xl font-semibold text-gray-900">Increased Safety for One Family</h3>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterVisual;
