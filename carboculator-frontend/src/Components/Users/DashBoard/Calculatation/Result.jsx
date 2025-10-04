import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const Result = () => {
    // 1. Create state variables to hold the fetched data
    const [emissionData, setEmissionData] = useState({
        totalMachineEmission: 0,
        totalTransportEmission: 0,
        totalElectricityEmission: 0
    });
    const [totalEmission, setTotalEmission] = useState(0);
    const [perCapitaEmission, setPerCapitaEmission] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const noOfWorkers = 750; // Constant value

    // 2. useEffect to fetch data from the API
    useEffect(() => {
        const fetchUserEmission = async () => {
            try {
                // Using withCredentials is the recommended way for cookie-based authentication.
                // If your backend expects a token in the Authorization header,
                // you would add it like this (assuming the token exists):
                const token = localStorage.getItem('token');
                const config = token ? {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    withCredentials: true // Still include this if your backend uses cookies alongside tokens
                } : {};

                const res = await axios.get("http://localhost:5000/api/emission", config);
                const { totalMachineEmission, totalTransportEmission, totalElectricityEmission } = res.data;

                // 3. Save the fetched data to state
                setEmissionData({
                    totalMachineEmission: Number(totalMachineEmission) || 0,
                    totalTransportEmission: Number(totalTransportEmission) || 0,
                    totalElectricityEmission: Number(totalElectricityEmission) || 0
                });

                // 4. Calculate total and per capita emissions
                const total = (Number(totalMachineEmission) || 0) + (Number(totalTransportEmission) || 0) + (Number(totalElectricityEmission) || 0);
                setTotalEmission(total.toFixed(2));
                setPerCapitaEmission((total / noOfWorkers).toFixed(3));
                setLoading(false);

            } catch (err) {
                console.error("Error fetching emission data:", err);
                if (err.response && err.response.status === 401) {
                    setError("Unauthorized. Please log in.");
                } else {
                    setError("Failed to fetch data.");
                }
                setLoading(false);
            }
        };

        fetchUserEmission();
    }, []);

    if (loading) {
        return <Typography variant="h6" sx={{ textAlign: "center", mt: "2rem" }}>Loading data...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" sx={{ textAlign: "center", mt: "2rem", color: 'red' }}>Error: {error}</Typography>;
    }

    // 5. Destructure the state for rendering
    const { totalMachineEmission, totalTransportEmission, totalElectricityEmission } = emissionData;

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
                        {totalEmission} kg
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '3rem' }}>
                    <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
                        Per Capita Emission
                    </Box>
                    <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {perCapitaEmission} kg
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '3rem' }}>
                    <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
                        Emission from Machines
                    </Box>
                    <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {totalMachineEmission} kg
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '3rem' }}>
                    <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
                        Emission from Transportation
                    </Box>
                    <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {totalTransportEmission} kg
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '3rem' }}>
                    <Box sx={{ width: "20rem", height: "3.44rem", display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }}>
                        Emission from Electricity
                    </Box>
                    <Box sx={{ border: '1px solid grey', width: "12.5rem", height: "3.44rem", borderRadius: "0.5rem", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {totalElectricityEmission} kg
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Result;