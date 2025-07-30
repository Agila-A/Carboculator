import { Box, Button, TextField, Typography, MenuItem, Autocomplete, Tooltip } from '@mui/material';
import React, { useState } from 'react';

const Machine = () => {
  const fueltypes = ['Petrol', 'Diesel', 'LPG', 'Coal'];
  const machineOptions = [
    "Continuous Miners", "Longwall Shearers", "Roadheaders", "Drill Jumbos", "Roof Bolters",
    "Shuttle Cars", "Load-Haul-Dump (LHD) Machines", "Electric Coal Cutters", "Surface Miners",
    "Draglines", "Bucket Wheel Excavators", "Hydraulic Shovels", "Blasting Machines", "Power Loaders",
    "Chain Conveyors", "Feeder Breakers", "Rock Dusters", "Ventilation Fans", "Dust Collectors",
    "Underground Haulage Locomotives", "Man Riding Systems", "Crusher Stations", "Belt Conveyor Systems"
  ];

  const [fuel, setFuel] = useState('');
  const [count, setCount] = useState('');
  const [hour, setHour] = useState('');
  const [machine, setMachine] = useState('');
  const [ferror, setFerror] = useState(false);
  const [cerror, setCerror] = useState(false);
  const [herror, setHerror] = useState(false);
  const [merror, setMerror] = useState(false);
  const [data, setData] = useState([]);

  const Data = () => {
    let valid = true;
    if (fuel.trim() === '') {
      setFerror(true);
      valid = false;
    }
    if (count.trim() === '') {
      setCerror(true);
      valid = false;
    }
    if (hour.trim() === '') {
      setHerror(true);
      valid = false;
    }
    if (machine?.trim() === '') {
      setMerror(true);
      valid = false;
    }
    if (!valid) return;

    const newEntry = { machine, count, fuel, hour };
    setData([...data, newEntry]);
    setMachine('');
    setCount('');
    setFuel('');
    setHour('');
  };

  const remove = (skip) => {
    const updated = data.filter((_, index) => index !== skip);
    setData(updated);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", maxWidth: '66.25rem', minHeight: "30rem",height: "100%", border: '2px solid grey', ml: "5rem", mr: "2.5rem" }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '1.5rem' }}>
          Input Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', mt: '1.5rem' }}>
          <Tooltip title="Please enter machine" arrow open={merror} disableHoverListener>
            <Autocomplete
              options={machineOptions}
              value={machine}
              onChange={(event, newValue) => {
                setMachine(newValue);
                setMerror(false);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Machines" size="small" error={merror} />
              )}
              sx={{ width: '10rem' }}
              freeSolo
            />
          </Tooltip>

          <Tooltip title="Please enter count" arrow open={cerror} disableHoverListener>
            <TextField
              label='Count'
              type='number'
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
                setCerror(false);
              }}
              size="small"
              sx={{ width: '10rem' }}
              error={cerror}
            />
          </Tooltip>

          <Tooltip title="Please select fuel" arrow open={ferror} disableHoverListener>
            <Autocomplete
              options={fueltypes}
              value={fuel}
              onChange={(event, newValue) => {
                setFuel(newValue);
                setFerror(false);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Fuel Type" size="small" error={ferror} />
              )}
              sx={{ width: '10rem' }}
            />
          </Tooltip>

          <Tooltip title="Please enter hours" arrow open={herror} disableHoverListener>
            <TextField
              label='Hours'
              type='number'
              value={hour}
              onChange={(e) => {
                setHour(e.target.value);
                setHerror(false);
              }}
              size="small"
              sx={{ width: '10rem' }}
              error={herror}
            />
          </Tooltip>

          <Button variant='contained' sx={{ width: '10rem', height: '2.5rem' }} onClick={Data}>
            Add
          </Button>
        </Box>

        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "#446891", ml: '2rem', mt: '2rem' }}>
          Machine List
        </Typography>

        <Box sx={{ width: '100%', maxWidth: '100%', height: '19.375rem', overflowY: 'auto', mt: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {data.map((data, index) => (
              <li key={index}
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
                  <Box sx={{ width: "9rem", height: '2.5rem', border: '1px solid #D3D3D3', borderRadius: '4px', display: 'flex', alignItems: "center", justifyContent: 'center', textAlign: 'center' }}>{data.machine}</Box>
                  <Box sx={{ width: "9rem", height: '2.5rem', border: '1px solid #D3D3D3', borderRadius: '4px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>{data.count}</Box>
                  <Box sx={{ width: "9rem", height: '2.5rem', border: '1px solid #D3D3D3', borderRadius: '4px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>{data.fuel}</Box>
                  <Box sx={{ width: "9rem", height: '2.5rem', border: '1px solid #D3D3D3', borderRadius: '4px', display: 'flex', alignItems: "center", justifyContent: 'center' }}>{data.hour}</Box>
                  <Button variant='contained' sx={{ width: "9rem", height: '2.5rem' }} onClick={() => remove(index)}>🗑</Button>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Machine;
