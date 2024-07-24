// src/Assurance.jsx TEMİNAT BİLGİLERİ

import React, { useState } from 'react';
import { Paper, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Typography, Box } from '@mui/material';


const Assurance = () => {
  const [selectedOption, setSelectedOption] = useState('internetSubesi');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const styles = {
    container: {
      padding: '2px',
      
    },
    infoBox: {
      padding: '20px',
      border: '1px solid #000',
      borderRadius: '5px',
      backgroundColor: '#ddd',
      marginBottom: '20px',
    },
    formControl: {
      display: 'flex',
      flexDirection: 'column',
    },
  };

  return (
    <div style={styles.container}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', color: "#000000" }}> 
      <Box style={styles.infoBox}>
      <Typography variant="h6" gutterBottom style={{ color: 'black', textAlign: 'left', fontSize: '16px', fontWeight: 'bold' }}>
        İşlem Kanalı Seçimi Nedir?
      </Typography>
      <Typography variant="body2" style={{ color: 'black', textAlign: 'left', fontSize: '16px' }}>
        İşlem kanalı seçimi, poliçenize ait işlemlerin hangi kanal tarafından takip edileceğini belirlemek için kullanılmaktadır.
        Tercihiniz ile, doğrudan şirket yetkilileri veya dilediğiniz bir acente üzerinden işlemlerinizi gerçekleştirebilirsiniz.
      </Typography>
      </Box>
      <FormControl component="fieldset" style={styles.formControl}>
        <RadioGroup name="channelSelection" value={selectedOption} onChange={handleChange}>
          <FormControlLabel value="internetSubesi" control={<Radio />} label="İnternet Şubesi" />
          <FormControlLabel value="acenteSec" control={<Radio />} label="Acenta Seç" />
        </RadioGroup>
      </FormControl>
      </Paper>
    </div>
  );
};

export default Assurance;
