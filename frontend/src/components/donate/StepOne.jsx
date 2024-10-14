import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

function StepOne() {
    const [amount, setAmount] = useState('');
    const [monthly, setMonthly] = useState(false);

    const handleFrequency = (frequency) =>{
      setMonthly(frequency);
    }
    return (
      <div className="p-8 mt-8 mx-auto bg-gray-50 shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">STEP 1</h2>
        <h1 className="text-3xl font-bold mb-4 text-n-3">Your donation</h1>
        <p className="text-sm text-gray-600 mb-4"><b className='text-red-600'>*</b> Indicates required field.</p>
  
        {/* Donation Frequency */}
        <p className="text-sm text-gray-600 mb-2">Choose a payment option <b className='text-red-600'>*</b></p>
        <div className="flex gap-4 mb-6">
          <button 
                className={`w-full py-2 px-4 ${ !monthly ?  "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
                onClick={()=>{handleFrequency(false)}}
                >
                  One-off
          </button>
          <button 
                className={`w-full py-2 px-4 ${ monthly ?  "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
              onClick={()=>{handleFrequency(true)}}
            >
            Monthly</button>
        </div>

        {/* Donation Amount */}
        <p className="text-sm text-gray-600 mb-4">How much would you like to donate? <b className='text-red-600'>*</b></p>
        <div className="grid grid-cols-2 gap-4 mb-6">
            <TextField
              variant="outlined"
              size="large"
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              InputProps={{
                startAdornment: <span>$</span>,
              }}
              className="w-full"
            />
        </div>
      </div>
  )
}

export default StepOne