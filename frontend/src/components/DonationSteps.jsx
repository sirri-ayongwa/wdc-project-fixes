import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepOne from './donate/StepOne';
import YourDetails from './donate/Details';
import PayementMethod from './donate/PayementMethod';
import { Button } from '@mui/material';

const steps = ['Your donation', 'Your details', 'Payement details'];

export default function DonationSteps() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor:'#ffffff', paddingX:10, paddingY:8 }} >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} className=''>
              <StepLabel 
                sx={{
                  '& .MuiStepLabel-label': { // Active step
                    color: index === activeStep ? 'black' : 'gray',
                    fontSize:24,
                  },
                  '& .MuiStepLabel-label.Mui-completed': { // Completed step
                    color: 'green', 
                  },
                  '& .MuiStepLabel-label.Mui-active': {
                    fontWeight: 'bold',
                  },
                }}
              {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
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
          {activeStep ===0 && <StepOne />}
          {activeStep ===1 && <YourDetails />}
           {activeStep ===2 && <PayementMethod />}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Button
              variant='outlined'
              size='large'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, }}
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

