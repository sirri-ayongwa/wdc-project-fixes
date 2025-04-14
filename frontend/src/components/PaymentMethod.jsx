import React from "react";

const PaymentMethod = ({ onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Payment Method</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full border rounded-lg p-2"
        required
      >
        <option value="">Select Payment Method</option>
        <option value="Stripe">Stripe</option>
        <option value="PayPal">PayPal</option>
      </select>
    </div>
  );
};

export default PaymentMethod;