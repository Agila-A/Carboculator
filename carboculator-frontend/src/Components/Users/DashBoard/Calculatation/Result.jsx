import React from 'react';
import { Box, Typography } from '@mui/material';
import { useEmission } from '../../Context/EmmissionContext'; // ✅ Import context

const Result = () => {
  const { emission, transportEmission } = useEmission(); // ✅ Access machine & transport emissions
  const totalEmission = (Number(emission) || 0) + (Number(transportEmission) || 0); // ✅ Total combined

  return (
    <Box sx={{ width: "100%", maxWidth: '66.25rem', minHeight: "31.8rem", border: '2px solid grey', ml: "5rem", mr: "2.5rem" }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          color: '#2C3E50',
          textAlign: "center",
          mt: "1rem"
        }}
      >
        Emission Estates
      </Typography>

      <Box sx={{ width: '70%', height: "90%", display: 'flex', flexDirection: 'column', gap: '1.7rem', alignItems: 'center', justifyContent: 'center', mt: "2rem" }}>
        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
            Total Carbon Emission
          </Box>
          <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {totalEmission.toFixed(2)} kg
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
            Per Capita Emission
          </Box>
          <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem" }}></Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
            Emission from Machines
          </Box>
          <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {emission} kg
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
            Emission from Transportation
          </Box>
          <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {transportEmission} kg
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '3rem' }}>
          <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
            Emission from Water usage
          </Box>
          <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem" }}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
