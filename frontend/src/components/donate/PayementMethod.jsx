/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { TextField, MenuItem } from '@mui/material';
import { FaPaypal } from "react-icons/fa";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

function PayementMethod() {
    const [amount, setAmount] = useState('');
    const [paypal, setPaypal] = useState(false);
  const [creditCard, setCreditCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHoldName:'',
  })
    const handleMode = (frequency) =>{
      setPaypal(frequency);
    }

      //  handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreditCard((prevCard) => ({
      ...prevCard,
      [name]: value 
    }));
  };

    // Function to format card number
    const formatCardNumber = (value) => {
      // Remove all non-digit characters
      const cleaned = value.replace(/\D+/g, '');
      // Split the cleaned string into chunks of 4 characters and join them with a space
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
      return formatted;
    };
  
    // Handle card number input
    const handleCardNumberChange = (e) => {
      const { value } = e.target;
      // Format the value
      const formattedCardNumber = formatCardNumber(value);
      // Trigger the handler with the cleaned card number (without spaces)
      handleChange({ target: { name: 'cardNumber', value: formattedCardNumber } });
    };
    return (
      <div className="p-8 mt-8 mx-auto bg-gray-50 shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">STEP 3</h2>
        <h1 className="text-3xl font-bold mb-4 text-n-3">Payment details</h1>
        <p className="text-sm text-gray-600 mb-2"><b className='text-red-600'>*</b> Indicates required field. </p>
        <hr className='mt-2 mb-8' />

        <p className="text-sm text-gray-600 mb-2">Choose a payment option: <b className='text-red-600'>*</b></p>
        <div className="flex gap-4 mb-6">
          <button 
                className={`w-full py-2 px-4 ${ !paypal ?  "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
                onClick={()=>{handleMode(false)}}
                >
                  Credit Card
          </button>
          <button 
                className={`w-full  py-2 px-4 flex justify-center items-center  ${ paypal ?  "bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none" : " bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"}`}
              onClick={()=>{handleMode(true)}}
            >
            <FaPaypal  className={`mr-1 `} size={30}/> 
            <span className=' font-bold text-base'> PayPal</span>
            </button>

        </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <TextField
                variant="outlined"
                size="large"
                label={<span className="text-xl">Cardholder Name <b className='text-red-600'>*</b></span>}
                name='holdname'
                type='text'
                value={creditCard.holdname}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
              <TextField
                  variant="outlined"
                  size="large"
                  label={<span className="text-xl">Card Number <b className="text-red-600">*</b></span>}
                  name="cardNumber"
                  type="text" 
                  value={creditCard.cardNumber}
                  onChange={handleCardNumberChange}
                  inputProps={{
                    maxLength: 19, // Max length for card number with spaces (16 digits + 3 spaces)
                      pattern: "[0-9]*", // Allow only numeric input
                    }}
                    className="w-full"
              />
           <div className="grid grid-cols-2 gap-4 mb-6">
                <TextField
                    variant="outlined"
                    size="large"
                    label={<span className="text-xl">Expiry Date <b className='text-red-600'>*</b></span>}
                    name='expiryDate'
                    type='text'
                    value={creditCard.expiryDate}
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        handleChange(e); 
                      }
                    }}
                    inputProps={{
                      maxLength: 6
                    }}
                    className="w-full"
                  />
                <TextField
                    variant="outlined"
                    size="large"
                    label={<span className="text-xl">CVV <b className='text-red-600'>*</b></span>}
                    name='cvv'
                    type='text'
                    value={creditCard.cvv}
                    onChange={(e) => {
                      if (e.target.value.length <= 3) {
                        handleChange(e); 
                      }
                    }}
                    inputProps={{
                      maxLength: 3,
                      pattern: "[0-9]*",
                    }}
                    className="w-fit-content w-full"
                  />
                  </div>
           </div>
           <p className=" base-1 text-gray-900" >
            Your total contribution to create a safer world for vulnerable people is $0. Thank you.
           </p>
      </div>
    )
}

export default PayementMethod