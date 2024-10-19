import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepOne from './donate/StepOne';  // Step 1: Donation
import YourDetails from './donate/Details';  // Step 2: User Details
import PayementMethod from './donate/PaymentMethod';  // Step 3: Payment
import { Button } from '@mui/material';

const steps = ['Your donation', 'Your details', 'Payment details'];

export default function DonationSteps() {
  // State to manage all form data
  const [activeStep, setActiveStep] = React.useState(0);
  const [amount, setAmount] = React.useState('');  // Donation amount (Step 1)
  const [details, setDetails] = React.useState({   // User details (Step 2)
    name: '',
    email: '',
    phone: ''
  });

  // Handlers for stepper
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAmount('');  // Reset amount
    setDetails({ name: '', email: '', phone: '' });  // Reset details
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffffff', paddingX: 10, paddingY: 8 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel 
              sx={{
                '& .MuiStepLabel-label': { // Active step
                  color: index === activeStep ? 'black' : 'gray',
                  fontSize: 24,
                },
                '& .MuiStepLabel-label.Mui-completed': { // Completed step
                  color: 'green',
                },
                '& .MuiStepLabel-label.Mui-active': {
                  fontWeight: 'bold',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {/* Render the content based on active step */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Render components conditionally based on activeStep */}
          {activeStep === 0 && (
            <StepOne 
              amount={amount} 
              setAmount={setAmount}  // Pass amount state and handler
            />
          )}
          {activeStep === 1 && (
            <YourDetails 
              details={details} 
              setDetails={setDetails}  // Pass details state and handler
            />
          )}
          {activeStep === 2 && (
            <PayementMethod 
              amount={amount}  // Pass amount only to the payment method step
            />
          )}
          
          {/* Step navigation buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant='outlined'
              size='large'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='contained' size='large' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
