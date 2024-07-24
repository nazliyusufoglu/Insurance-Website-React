// src/GeneralInformations.jsx GENEL BİLGİLER
import { useState } from 'react';
import { Button, Grid, TextField, Typography, Paper } from '@mui/material';

const GeneralInformations = () => {

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', color: "#000000" }}>

      <Grid container spacing={2} alignItems="center" >
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="TC Kimlik Numarası"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="İsim"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Soyisim"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="E-Posta Adresi"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Cep Telefonu"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Boy (cm)"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Kilo (kg)"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default GeneralInformations;
