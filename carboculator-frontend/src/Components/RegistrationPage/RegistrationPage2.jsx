
import { TextField, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react'; // Import useEffect
import Regimg from "../../assets/RegistrationPage/Regpage1.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegistrationPage2 = () => {
    const navigate = useNavigate();

    // Data
    const mineTypes = [
        "Open-Pit Mine", "Underground Mine", "Strip Mine", "Placer Mine",
        "Mountaintop Removal Mine", "In-situ (Solution) Mine", "Quarry"
    ];

    const mineLocations = [
        "Dhanbad, Jharkhand", "Bokaro, Jharkhand", "Korba, Chhattisgarh", "Raigarh, Chhattisgarh",
        "Keonjhar, Odisha", "Sundargarh, Odisha", "Singrauli, Madhya Pradesh", "Panna, Madhya Pradesh",
        "Nagpur, Maharashtra", "Chandrapur, Maharashtra", "Udaipur, Rajasthan", "Makrana, Rajasthan",
        "Bicholim, Goa", "Bellary, Karnataka", "Kolar, Karnataka", "Neyveli, Tamil Nadu",
        "Singareni, Telangana", "Cuddapah, Andhra Pradesh"
    ];

    // Styling
    const inpStyle = { width: "90%", marginBottom: "2%" };

    // useStates for mine details
    const [mineName, setMineName] = useState("");
    const [mineType, setMineType] = useState(""); // Renamed from 'type' to avoid conflict
    const [mineSize, setMineSize] = useState(""); // Renamed from 'size'
    const [mineLocation, setMineLocation] = useState(""); // Renamed from 'location'
    const [annualCoalProduction, setAnnualCoalProduction] = useState("");
    const [annualEnergyConsumption, setAnnualEnergyConsumption] = useState("");

    // Function to retrieve all stored registration data
    const getStoredRegistrationData = () => {
        try {
            const data = localStorage.getItem('registrationData');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Failed to parse registration data from localStorage", error);
            return null;
        }
    };

    // Effect to ensure we have initial data, if not, redirect
    useEffect(() => {
        const storedData = getStoredRegistrationData();
        if (!storedData || !storedData.email || !storedData.password) {
            alert("Registration flow interrupted. Please start from the signup page.");
            navigate('/signup');
        }
    }, [navigate]);

    // Handle form submission for the "COMPLETE" button
    const handleCompleteRegistration = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // 1. Get all data from previous steps and current step
        const initialData = getStoredRegistrationData();
        if (!initialData) {
            alert("Registration data missing. Please restart the process.");
            navigate('/signup');
            return;
        }

        const completeUserData = {
            // From SignUpPage & RegistrationPage1 (from localStorage)
            fullName: initialData.fullName,
            email: initialData.email,
            password: initialData.password,
            phoneNumber: initialData.phoneNumber,
            companyName: initialData.companyName,
            designation: initialData.designation,

            // From current page (RegistrationPage2)
            mineName,
            mineType, // Use the state variable
            mineSize, // Use the state variable
            mineLocation, // Use the state variable
            annualCoalProduction: parseFloat(annualCoalProduction), // Convert to number
            annualEnergyConsumption: parseFloat(annualEnergyConsumption) // Convert to number
        };

        // Basic validation for current page fields
        if (!mineName || !mineType || !mineSize || !mineLocation || annualCoalProduction === "" || annualEnergyConsumption === "") {
            alert("Please fill in all mine details.");
            return;
        }
        if (isNaN(completeUserData.annualCoalProduction) || isNaN(completeUserData.annualEnergyConsumption)) {
            alert("Annual Production and Consumption must be valid numbers.");
            return;
        }

        // 2. Send data to backend
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(completeUserData),
            });

            const data = await response.json();

            if (response.ok) { // Check if the response status is in the 2xx range
                console.log('Registration successful:', data);
                localStorage.setItem('token', data.token); // Store the JWT token
                localStorage.removeItem('registrationData'); // Clean up temporary data
                alert('Registration successful!');
                navigate('/dash'); // Redirect to dashboard
            } else {
                console.error('Registration failed:', data.message);
                alert(`Registration failed: ${data.message || 'Something went wrong.'}`);
            }
        } catch (error) {
            console.error('Network error during registration:', error);
            alert('An error occurred. Please check your internet connection and try again.');
        }
    };

    return (
        <div style={{ display: 'flex', width: "100%", height: "100vh", backgroundColor: "rgba(239, 255, 252, 1)" }}>

            <div style={{ width: "50%", height: "100vh" }}>
                <div>
                    <img src={Regimg} style={{ height: "100vh", width: "100%", borderRadius: "0px 40px 40px 0px", }} />
                </div>
            </div>

            {/* Input Fields */}
            <div style={{ width: "50%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "85%", height: "85vh", backgroundColor: "white", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", position: "relative", overflowY: "auto" }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: "35px", textAlign: "center", padding: "2% 0% 0% 0%" }}>REGISTRATION</h1>
                    <h4 style={{ fontWeight: "bold", color: "gray", padding: "2% 1%", fontSize: "20px", textAlign: "center" }}>MINE DETAILS</h4>
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <TextField required style={inpStyle} label="Enter Mine Name" type='text' value={mineName} onChange={(e) => setMineName(e.target.value)} />
                        <TextField
                            select
                            label="Select Mine Type"
                            value={mineType}
                            onChange={(e) => setMineType(e.target.value)}
                            style={inpStyle}
                            required
                        >
                            {mineTypes.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField select style={inpStyle} label="Select Mine Size" value={mineSize} onChange={(e) => setMineSize(e.target.value)} required>
                            <MenuItem value="Small">Small</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Large">Large</MenuItem>
                        </TextField>

                        <TextField select style={inpStyle} label="Select Mine Location" value={mineLocation} onChange={(e) => setMineLocation(e.target.value)} required>
                            {mineLocations.map((loc, index) => (
                                <MenuItem value={loc} key={index}>
                                    {loc}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            style={inpStyle}
                            label="Enter Annual Coal Production (Tonnes)"
                            type="number"
                            required
                            value={annualCoalProduction}
                            onChange={(e) => setAnnualCoalProduction(e.target.value)}
                        />
                        <TextField
                            style={inpStyle}
                            label="Enter Annual Energy Consumption (MWh)"
                            type="number"
                            required
                            value={annualEnergyConsumption}
                            onChange={(e) => setAnnualEnergyConsumption(e.target.value)}
                        />
                        <button
                            style={{ backgroundColor: "blue", color: "white", border: "none", fontWeight: 'bold', fontSize: '20px', padding: "0.5% 3%", borderRadius: "25px", width: "30%", height: "7vh", margin: "1%" }}
                            onClick={handleCompleteRegistration} // Call the function here
                        >
                            COMPLETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage2;
