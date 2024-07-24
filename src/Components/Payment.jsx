import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Payment = () => {
  const [selectedColumn, setSelectedColumn] = useState('YATISLI'); // Başlangıçta YATIŞLI sütunu seçili

  const handleColumnChange = (event) => {
    setSelectedColumn(event.target.value);
  };

  const tableData = [
    { metric: 'Ameliyat', YATISLI: true, YATISSIZ: true },
    { metric: 'Oda-Yemek-Refakatçi Masrafları', YATISLI: true, YATISSIZ: true },
    { metric: 'Yoğun Bakım', YATISLI: true, YATISSIZ: true },
    { metric: 'Küçük Müdahale', YATISLI: true, YATISSIZ: true },
    { metric: 'Kemoterapi', YATISLI: true, YATISSIZ: true },
    { metric: 'Radyo Terapi', YATISLI: true, YATISSIZ: true },
    { metric: 'Diyaliz', YATISLI: true, YATISSIZ: true },
    { metric: 'Deprem', YATISLI: false, YATISSIZ: true },
    { metric: 'Doktor Muayene', YATISLI: false, YATISSIZ: true },
    { metric: 'Tanı', YATISLI: false, YATISSIZ: true },
    { metric: 'Fizik Tedavi', YATISLI: true, YATISSIZ: true },
    { metric: 'Ferdi Kaza - Sürekli Sakatlık', YATISLI: '5000 ₺', YATISSIZ: '5000 ₺' },
    { metric: 'Ferdi Kaza - Ölüm', YATISLI: '5000 ₺', YATISSIZ: '5000 ₺' },
    { metric: '7/24 Canlı ve Görüntülü Sağlık Danışmanlığı', YATISLI: true, YATISSIZ: true },
    { metric: 'Check-Up', YATISLI: true, YATISSIZ: true },
    { metric: 'Acil Ambulans ve Tıbbi Danışmanlık', YATISLI: true, YATISSIZ: true },
    { metric: 'Evde Bakım', YATISLI: '100000 ₺', YATISSIZ: '100000 ₺' },
    { metric: 'Suni Uzuv', YATISLI: '125000 ₺', YATISSIZ: '125000 ₺' },
    { metric: 'Yardımcı Tıbbi Malzeme', YATISLI: '20000 ₺', YATISSIZ: '20000 ₺' },
    { metric: 'Diş Hizmet Paketi', YATISLI: true, YATISSIZ: true },
    { metric: 'Toplam Peşin Tutar', YATISLI: '2295 ₺', YATISSIZ: '6525 ₺' },
  ];

  return (
    <div>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', color: "#000000" }}>
        <h2>Tamamlayıcı Sağlık Sigortası Teminat Detayları</h2>

        {/* Sütun seçim düğmeleri */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            <input
              type="radio"
              value="YATISLI"
              checked={selectedColumn === 'YATISLI'}
              onChange={handleColumnChange}
            />
            YATIŞLI
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              value="YATISSIZ"
              checked={selectedColumn === 'YATISSIZ'}
              onChange={handleColumnChange}
            />
            YATIŞLI+YATIŞSIZ
          </label>
        </div>

        {/* Performans tablosu */}
        <TableContainer component={Paper} style={{ maxHeight: 400, overflow: 'auto' }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Metric</TableCell>
                <TableCell align="right">{selectedColumn}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} style={{ fontWeight: row.metric === 'Toplam Peşin Tutar' ? 'bold' : 'normal' }}>
                  <TableCell component="th" scope="row">
                    {row.metric}
                  </TableCell>
                  <TableCell align="right">
                    {typeof row[selectedColumn] === 'boolean'
                      ? row[selectedColumn] ? '✓' : '-'
                      : row[selectedColumn]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Payment;
