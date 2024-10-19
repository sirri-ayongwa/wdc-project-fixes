import React from 'react'
import { TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';

function YourDetails() {
  const [details, setDetails]=useState({
    firstname:'',lastname:'',email:'',phone:'', address:''
  })
  //  handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value 
    }));
  };

  return (
    <div className="p-8 mt-8 mx-auto bg-gray-50 shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">STEP 2</h2>
        <h1 className="text-3xl font-bold mb-4 text-n-3">Your Details</h1>

        {/* Donator information */}
        <p className="text-sm text-gray-600 mb-4"><b className='text-red-600'>*</b> Indicates required field.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
            <TextField
              variant="outlined"
              size="large"
              label={<span className="text-xl">Fist Name <b className='text-red-600'>*</b></span>}
              name='firstname'
              type='text'
              value={details.firstname}
              onChange={handleChange}
              InputProps={{
                startAdornment: <AccountBoxIcon/>,
              }}
              className="w-full"
            />
            <TextField
              variant="outlined"
              size="large"
              label={<span className="text-xl">Last Name <b className='text-red-600'>*</b></span>}
              name='lastname'
              type='text'
              value={details.lastname}
              onChange={handleChange}
              InputProps={{
                startAdornment: <AccountBoxIcon/>,
              }}
              className="w-full"
            />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              variant="outlined"
              size="large"
              label={<span className="text-xl">Email Address <b className='text-red-600'>*</b></span>}
              name='email'
              type='email'
              value={details.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: <ContactMailOutlinedIcon/>,
              }}
              className="w-full"
            />
            
        </div>
        <div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              variant="outlined"
              size="large"
              label={<span className="text-xl">Phone Number </span>}
              name='phone'
              type='phone'
              value={details.phone}
              onChange={handleChange}
              InputProps={{
                startAdornment: <ContactPhoneIcon/>,
              }}
              className="w-full"
            />
        </div>
        {/*<div className="grid grid-cols-1 gap-4 mb-6">
            <TextField
              variant="outlined"
              size="large"
              label={<span className="text-xl">Adress</span>}
              name='adress'
              type='text'
              value={details.adress}
              onChange={handleChange}
              InputProps={{
                startAdornment: <PersonPinCircleOutlinedIcon/>,
              }}
              InputLabelProps={{className: 'text-xl'}}
              className="w-full"
            />
        </div>*/}
        <p className="text-base text-gray-800 mb-4">By completing this action, you give permission for World Disater Center to contact you. You can unsubscribe from updates at any time.</p>
      </div>
  )
}

export default YourDetails