import { Box, Button, TextField, Typography, Autocomplete, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useEmission } from '../../Context/EmmissionContext';

const Machine = () => {
  const fueltypes = ['Petrol', 'Diesel', 'LPG', 'Coal'];
  const machineOptions = [
    "Continuous Miners", "Longwall Shearers", "Roadheaders", "Drill Jumbos", "Roof Bolters",
    "Shuttle Cars", "Load-Haul-Dump (LHD) Machines", "Electric Coal Cutters", "Surface Miners",
    "Draglines", "Bucket Wheel Excavators", "Hydraulic Shovels", "Blasting Machines", "Power Loaders",
    "Chain Conveyors", "Feeder Breakers", "Rock Dusters", "Ventilation Fans", "Dust Collectors",
    "Underground Haulage Locomotives", "Man Riding Systems", "Crusher Stations", "Belt Conveyor Systems"
  ];
  const emissionFactors = {
    Petrol: 2.31,
    Diesel: 2.68,
    LPG: 1.51,
    Coal: 2.42
  };

  const [fuel, setFuel] = useState('');
  const [count, setCount] = useState('');
  const [hour, setHour] = useState('');
  const [machine, setMachine] = useState('');
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);
  const [machineEmission, setMachineEmission] = useState(0);
  const { setEmission } = useEmission();

  // ✅ Save machine emission to emissionData table
  const saveMachineEmission = async (totalMachineEmission) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found. Please log in again.');
        return;
      }
      await axios.post(
        'http://localhost:5000/api/emission',
        { totalMachineEmission },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("✅ Machine emission saved successfully to emissionData table");
    } catch (err) {
      console.error("❌ Failed to save machine emission:", err);
    }
  };

  // ✅ Fetch machine data and calculate emission
  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('❌ No token found. Please log in again.');
      alert('Session expired. Please log in again.');
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/machine", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data);

      let total = 0;
      res.data.forEach(item => {
        const factor = emissionFactors[item.fuel] || 0;
        total += factor * Number(item.count) * Number(item.hour);
      });

      const finalTotal = total.toFixed(2);
      setMachineEmission(finalTotal);
      return finalTotal; // 👉 useful for delete
    } catch (err) {
      if (err.response?.status === 401) {
        console.error("❌ Unauthorized: Token expired or invalid");
        alert("Session expired. Please log in again.");
      } else {
        console.error('Failed to fetch data:', err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const newErrors = {};
    if (!machine.trim()) newErrors.machine = true;
    if (!count.trim()) newErrors.count = true;
    if (!fuel.trim()) newErrors.fuel = true;
    if (!hour.trim()) newErrors.hour = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    const factor = emissionFactors[fuel] || 0;
    const emission = (factor * Number(count) * Number(hour)).toFixed(2);

    const newEntry = { machine, count, fuel, hour, emission };

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please log in again.');
        return;
      }

      const res = await axios.post(
        'http://localhost:5000/api/machine',
        newEntry,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 201) {
        setMachine('');
        setCount('');
        setFuel('');
        setHour('');
        const newTotal = await fetchData();
        if (newTotal !== undefined) saveMachineEmission(newTotal);
      }
    } catch (err) {
      console.error('Error sending data:', err);
      alert('Failed to store machine data');
    }
  };

  const remove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/machine/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // ✅ Recalculate emissions after deletion and update DB
      const newTotal = await fetchData();
      if (newTotal !== undefined) saveMachineEmission(newTotal);
    } catch (err) {
      console.error('Error deleting:', err);
      alert('Failed to delete from database');
    }
  };

  // ✅ Keep context updated whenever machineEmission changes
  useEffect(() => {
    setEmission(machineEmission);
  }, [machineEmission]);

  return (
    <Box>
      <Box sx={{ width: "100%", maxWidth: '66.25rem', minHeight: "30rem", border: '2px solid grey', ml: "5rem", mr: "2.5rem" }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '1.5rem' }}>
          Input Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', mt: '1.5rem' }}>
          <Tooltip title="Please enter machine" arrow open={!!errors.machine} disableHoverListener>
            <Autocomplete
              options={machineOptions}
              value={machine}
              onChange={(e, newValue) => {
                setMachine(newValue);
                setErrors(prev => ({ ...prev, machine: false }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Machines" size="small" error={!!errors.machine} />
              )}
              sx={{ width: '10rem' }}
              freeSolo
            />
          </Tooltip>

          <Tooltip title="Please enter count" arrow open={!!errors.count} disableHoverListener>
            <TextField
              label='Count'
              type='number'
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
                setErrors(prev => ({ ...prev, count: false }));
              }}
              size="small"
              sx={{ width: '10rem' }}
              error={!!errors.count}
            />
          </Tooltip>

          <Tooltip title="Please select fuel" arrow open={!!errors.fuel} disableHoverListener>
            <Autocomplete
              options={fueltypes}
              value={fuel}
              onChange={(e, newValue) => {
                setFuel(newValue);
                setErrors(prev => ({ ...prev, fuel: false }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Fuel Type" size="small" error={!!errors.fuel} />
              )}
              sx={{ width: '10rem' }}
            />
          </Tooltip>

          <Tooltip title="Please enter hours" arrow open={!!errors.hour} disableHoverListener>
            <TextField
              label='Hours'
              type='number'
              value={hour}
              onChange={(e) => {
                setHour(e.target.value);
                setErrors(prev => ({ ...prev, hour: false }));
              }}
              size="small"
              sx={{ width: '10rem' }}
              error={!!errors.hour}
            />
          </Tooltip>

          <Button variant='contained' sx={{ width: '10rem', height: '2.5rem' }} onClick={handleSubmit}>
            Add
          </Button>
        </Box>

        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '2rem' }}>
          Machine List
        </Typography>

        <Box sx={{ width: '100%', maxWidth: '100%', height: '19.375rem', overflowY: 'auto', mt: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.map((item) => (
              <li key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.625rem',
                  padding: '0.3125rem 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Box sx={{ width: "100%", maxWidth: '66.25rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
                  <Box sx={cellStyle}>{item.machine}</Box>
                  <Box sx={cellStyle}>{item.count}</Box>
                  <Box sx={cellStyle}>{item.fuel}</Box>
                  <Box sx={cellStyle}>{item.hour}</Box>
                  <Button variant='contained' sx={{ width: "9rem", height: '2.5rem' }} onClick={() => remove(item.id)}>🗑</Button>
                </Box>
              </li>
            ))}
          </ul>
        </Box>

        <Typography sx={{ ml: '2rem', mt: '1rem', color: '#2e7d32', fontWeight: 600 }}>
          Total Machine Emission: {machineEmission} kg CO₂
        </Typography>
      </Box>
    </Box>
  );
};

const cellStyle = {
  width: "9rem",
  height: '2.5rem',
  border: '1px solid #D3D3D3',
  borderRadius: '4px',
  display: 'flex',
  alignItems: "center",
  justifyContent: 'center',
  textAlign: 'center'
};

export default Machine;
