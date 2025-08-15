import { Box, Button, TextField, Typography, Autocomplete, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useEmission } from '../../Context/EmmissionContext';

// 🔌 Electricity sources related to coal mining
const electricitySources = [
  "Coal-fired Power Plant",
  "Diesel Generator",
  "Solar Panels",
  "Grid Electricity",
  "Hydroelectric Power",
  "Wind Turbine"
];

// 🌍 Emission factors (kg CO2e per kWh)
const emissionFactors = {
  "Coal-fired Power Plant": 1.05,
  "Diesel Generator": 2.67,
  "Solar Panels": 0.05,
  "Grid Electricity": 0.82,
  "Hydroelectric Power": 0.02,
  "Wind Turbine": 0.01
};

const Electricity = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);
  const [totalEmission, setTotalEmission] = useState(0);
  const { setElectricityEmission } = useEmission();

  const token = localStorage.getItem("token"); // ✅ Get token for auth requests

  const saveElectricityEmission = async (totalElectricityEmission) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found. Please log in again.');
          return;
        }
        await axios.post(
          'http://localhost:5000/api/emission',
          { totalElectricityEmission },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("✅ Electricity emission saved successfully to emissionData table");
      } catch (err) {
        console.error("❌ Failed to save machine emission:", err);
      }
    };

  // 🔃 Fetch data for the logged-in user
  useEffect(() => {
    axios.get('http://localhost:5000/api/electricity', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        const updated = res.data.map(item => ({
          ...item,
          emission: ((item.amount * (emissionFactors[item.source] || 0)) / 1000).toFixed(4)
        }));
        setData(updated);

        // ✅ Calculate total
        let total = 0;
        updated.forEach(item => {
          total += (item.amount * (emissionFactors[item.source] || 0)) / 1000;
        });
        setTotalEmission(total.toFixed(2));
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  // ➕ Add entry and store emission in EmissionData
  const handleAdd = async () => {
    const newErrors = {};
    if (!source.trim()) newErrors.source = true;
    if (!amount.trim()) newErrors.amount = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    try {
      const res = await axios.post(
        'http://localhost:5000/api/electricity',
        { source, amount: Number(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newItem = res.data.data;
      const factor = emissionFactors[source] || 0;
      const calculatedEmission = ((amount * factor) / 1000).toFixed(4);

      const updatedData = [...data, { ...newItem, emission: calculatedEmission }];
      setData(updatedData);

      // ✅ Recalculate total and save to EmissionData table
      let total = 0;
      updatedData.forEach(item => {
        total += (item.amount * (emissionFactors[item.source] || 0)) / 1000;
      });
      const newTotal = total.toFixed(2);
      setTotalEmission(newTotal);

      // 📤 Send total to EmissionData backend
      await axios.post(
        'http://localhost:5000/api/emission',
        { type: "Electricity", totalEmission: newTotal },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSource('');
      setAmount('');
    } catch (err) {
      console.error('Error saving electricity data:', err);
    }
  };

  // 🗑 Delete entry and update total
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/electricity/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);

      let total = 0;
      updatedData.forEach(item => {
        total += (item.amount * (emissionFactors[item.source] || 0)) / 1000;
      });
      const newTotal = total.toFixed(2);
      setTotalEmission(newTotal);

      // 📤 Update EmissionData backend
      await axios.post(
        'http://localhost:5000/api/emission',
        { type: "Electricity", totalEmission: newTotal },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  // 📌 Sync with context
  useEffect(() => {
    setElectricityEmission(totalEmission);
    if(totalEmission>0)
      saveElectricityEmission(totalEmission)
  }, [totalEmission]);

    

  return (
    <Box>
      <Box sx={{ width: "100%", maxWidth: '66.25rem', minHeight: "30rem", border: '2px solid grey', ml: "5rem", mr: "2.5rem" }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '1.5rem' }}>
          Input Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', mt: '1.5rem' }}>
          {/* Source */}
          <Tooltip title="Please select source" arrow open={!!errors.source} disableHoverListener>
            <Autocomplete
              options={electricitySources}
              value={source}
              onChange={(e, newValue) => {
                setSource(newValue);
                setErrors(prev => ({ ...prev, source: false }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Source of Electricity" size="small" error={!!errors.source} />
              )}
              sx={{ width: '14rem' }}
              freeSolo
            />
          </Tooltip>

          {/* Amount */}
          <Tooltip title="Please enter amount" arrow open={!!errors.amount} disableHoverListener>
            <TextField
              label='Amount (kWh)'
              type='number'
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setErrors(prev => ({ ...prev, amount: false }));
              }}
              size="small"
              sx={{ width: '14rem' }}
              error={!!errors.amount}
            />
          </Tooltip>

          <Button variant='contained' sx={{ width: '14rem', height: '2.5rem' }} onClick={handleAdd}>
            Add
          </Button>
        </Box>

        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '2rem' }}>
          Electricity Source List
        </Typography>

        <Box sx={{ width: '100%', maxWidth: '100%', height: '19.375rem', overflowY: 'auto', mt: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.map((item) => (
              <li key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginBottom: '0.625rem',
                  padding: '0.3125rem 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Box sx={{ width: "100%", maxWidth: '100%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
                  <Box sx={cellStyle}>{item.source}</Box>
                  <Box sx={cellStyle}>{item.amount} kWh</Box>
    
                  <Button variant='contained' sx={{ width: "14rem", height: '2.5rem' }} onClick={() => handleDelete(item.id)}>🗑</Button>
                </Box>
              </li>
            ))}
          </ul>
        </Box>

        {/* Total Emission Display */}
        <Typography sx={{ ml: '2rem', mt: '1rem', color: '#2e7d32', fontWeight: 600 }}>
                  Total Emission: {totalEmission} kg CO₂
        </Typography>
      </Box>
    </Box>
  );
};

// 💅 Shared styles
const cellStyle = {
  width: "14rem",
  height: '2.5rem',
  border: '1px solid #D3D3D3',
  borderRadius: '4px',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  textAlign: 'center'
};

export default Electricity;
