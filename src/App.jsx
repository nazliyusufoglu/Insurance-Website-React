import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { Grid, Button } from '@mui/material';
import GeneralInformations from './Components/GeneralInformations';
import ContractedInstitutions from './Components/ContractedInstitutions';
import './App.css';
import Assurance from './Components/Assurance';
import Payment from './Components/Payment';

function App() {
  const steps = [
    { label: 'Genel Bilgiler' },
    { label: 'Anlaşmalı Kurumlar' },
    { label: 'Teminat Bilgileri' },
    { label: 'Ödeme Bilgileri' }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="App">
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step 
            key={index} 
            label={step.label} 
            style={{ 
              backgroundColor: activeStep >= index ? '#4caf50' : '#e0e0e0', 
              color: activeStep === index ? '#fff' : '#000',
              borderRadius: '4px',
              padding: '10px',
              margin: '5px'
            }} 
          />
        ))}
      </Stepper>
      {activeStep === 0 && <GeneralInformations />}
      {activeStep === 1 && <ContractedInstitutions />}
      {activeStep === 2 && <Assurance />}
      {activeStep === 3 && <Payment />}

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0))}
          >
            Geri
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1))}
          >
            İleri
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
