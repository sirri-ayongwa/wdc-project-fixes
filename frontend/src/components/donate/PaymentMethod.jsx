import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { FaPaypal } from "react-icons/fa";

function PaymentMethod({ amount }) {
  const [paypal, setPaypal] = useState(false);
  const [creditCard, setCreditCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHoldName: '',
  });

  const handleMode = (frequency) => {
    setPaypal(frequency);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreditCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D+/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    const formattedCardNumber = formatCardNumber(value);
    handleChange({ target: { name: 'cardNumber', value: formattedCardNumber } });
  };

  return (
    <div className="p-8 mt-8 mx-auto bg-gray-50 shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">STEP 3</h2>
      <h1 className="text-3xl font-bold mb-4 text-n-3">Payment Details</h1>
      <p className="text-sm text-gray-600 mb-2"><b className='text-red-600'>*</b> Indicates required field.</p>
      <hr className='mt-2 mb-8' />

      <p className="text-sm text-gray-600 mb-2">Choose a payment option: <b className='text-red-600'>*</b></p>
      <div className="flex gap-4 mb-6">
        <button
          className={`w-full py-2 px-4 ${!paypal ? "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
          onClick={() => handleMode(false)}
        >
          Credit Card
        </button>
        <button
          className={`w-full py-2 px-4 flex justify-center items-center ${paypal ? "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
          onClick={() => handleMode(true)}
        >
          <FaPaypal className="mr-1" size={30} />
          <span className='font-bold text-base'> PayPal</span>
        </button>
      </div>

      {/* Total Contribution */}
      <p className="text-base text-gray-900">
        Your total contribution to creating a safer world for vulnerable people is ${amount || '0'}. Thank you.
      </p>
    </div>
  );
}

export default PaymentMethod;
