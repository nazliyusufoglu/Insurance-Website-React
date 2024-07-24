// src/ContractedInstitutions.jsx ANLAŞMALI KURUMLAR

import React, { useState } from 'react';

const ContractedInstitutions = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const styles = {
    container: {
      padding: '3px',
    },
    header: {
        textAlign: 'center',
    },

    progressBar: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '20px',
    },
   
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      background: '#ffffff',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      background: '#2196f3',
      color: 'white',
      cursor: 'pointer',
    },
    activeButton: {
      background: '#1976d2',
    },
    formGroup: {
      marginBottom: '2px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      background: '#dddddd'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      background: '#dddddd'
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.formContainer}>
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.activeButton }}>TAMAMLAYICI</button>
          <button style={styles.button}>TAMAMLAYICI EKO</button>
        </div>
        <p style={{ color: 'black' }}>Tamamlayıcı kapsamındaki hastaneleri inceleyebilirsiniz.</p>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="province">İl</label>
          <select id="province" value={selectedProvince} onChange={handleProvinceChange} style={styles.select}>
            <option value="" disabled>İl seçiniz</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="district">İlçe</label>
          <select id="district" value={selectedDistrict} onChange={handleDistrictChange} style={styles.select}>
            <option value="" disabled>İlçe seçiniz</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="hospital">Hastane Ara</label>
          <input
            type="text"
            id="hospital"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Hastane ara"
            style={styles.input}
          />
        </div>

      </div>
    </div>
  );
};

export default ContractedInstitutions;
