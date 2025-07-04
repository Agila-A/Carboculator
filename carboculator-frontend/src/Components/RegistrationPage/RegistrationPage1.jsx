
import { TextField, IconButton, InputAdornment, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, useEffect } from 'react'; // Import useEffect
import Regimg from "../../assets/RegistrationPage/Regpage2.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegistrationPage1 = () => {
    const navigate = useNavigate();

    // Data's (keeping these as they are static)
    const designations = [
        // Mining & Industrial
        "Mining Engineer", "Geologist", "Mine Supervisor", "Equipment Operator", "Drill Operator",
        "Blasting Specialist", "Shift In-charge", "Site Safety Officer", "Environmental Compliance Officer",
        // Environmental & Sustainability
        "Sustainability Officer", "Carbon Footprint Analyst", "Environmental Consultant", "ESG Specialist",
        "Energy Auditor", "Waste Management Officer", "Climate Analyst", "Green Officer", "CSR Executive",
        // Technical & Engineering
        "Mechanical Engineer", "Electrical Engineer", "Process Engineer", "Energy Manager",
        "Industrial Automation Engineer", "Instrumentation Engineer", "Project Engineer",
        // Administrative & Policy
        "Operations Manager", "Facility Manager", "HSE Manager", "Government Inspector",
        "Policy Advisor", "Data Entry Officer", "Compliance Manager",
        // Business & Stakeholder
        "Business Owner", "Company Director", "Procurement Officer", "Consultant",
        "NGO Representative", "Vendor", "Sustainability Partner",
        // Academic & Research
        "Environmental Researcher", "University Professor", "Student – Environmental Science",
        "Climate Change Researcher", "Data Scientist – Carbon Analytics",
        // Generic Options
        "Worker", "Supervisor", "Manager", "Consultant",
        "Engineer", "Analyst", "Officer", "Technician", "Staff", "Other"
    ];

    // Styling
    const inpStyle = { width: "90%", marginBottom: "2%" };

    // useStates for user details
    const [showPassword, setShowPassword] = useState(false); // Not strictly needed here, but kept if you re-add password field
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState(""); // Will be pre-filled/retrieved
    const [password, setPassword] = useState(""); // Will be pre-filled/retrieved
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [designation, setDesignation] = useState("");

    // Effect to load initial data from localStorage
    useEffect(() => {
        try {
            const storedData = localStorage.getItem('registrationData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                // Pre-fill fields if they exist in stored data (email, password, fullName from SignUpPage)
                setEmail(parsedData.email || '');
                setPassword(parsedData.password || '');
                setFullName(parsedData.fullName || '');
            } else {
                // If no initial data, maybe redirect back to SignUp if needed, or handle as an error
                alert("Please start registration from the signup page.");
                navigate('/signup'); // Redirect back if no initial data
            }
        } catch (error) {
            console.error("Failed to load registration data from localStorage:", error);
            alert("Error loading data. Please try again from the signup page.");
            navigate('/signup');
        }
    }, [navigate]); // Add navigate to dependency array

    // function
    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleNext = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!fullName || !email || !password || !phoneNumber || !companyName || !designation) {
            alert("Please fill in all user details.");
            return;
        }

        // Get current stored data (which should contain email, password, fullName)
        const currentStoredData = JSON.parse(localStorage.getItem('registrationData') || '{}');

        // Combine all user details (from SignUpPage and this page)
        const updatedRegistrationData = {
            ...currentStoredData, // Keep email, password, fullName
            phoneNumber,
            companyName,
            designation,
        };

        // Store the combined data for the next step
        localStorage.setItem('registrationData', JSON.stringify(updatedRegistrationData));

        // Redirect to RegistrationPage2
        navigate('/registration2');
    };

    return (
        <div style={{ display: 'flex', width: "100%", height: "100vh", backgroundColor: "rgba(239, 255, 252, 1)" }}>

            {/* Input Fields */}
            <div style={{ width: "50%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "85%", height: "85vh", backgroundColor: "white", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", position: "relative", overflowY: "auto" }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: "35px", textAlign: "center", padding: "2% 0% 0% 0%" }}>REGISTRATION</h1>
                    <h4 style={{ fontWeight: "bold", color: "gray", padding: "2% 1%", fontSize: "20px", textAlign: "center" }}>USER DETAILS</h4>
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <TextField style={inpStyle} label="Enter Your Name" type='text' required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        {/* Email and Password fields are displayed but should not be editable as they come from SignUpPage */}
                        <TextField style={inpStyle} label="Email (from SignUp)" type='email' value={email} InputProps={{ readOnly: true }} />
                        <TextField
                            label="Password (from SignUp)"
                            type={showPassword ? 'text' : 'password'}
                            style={inpStyle}
                            value={password}
                            InputProps={{
                                readOnly: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField style={inpStyle} label="Enter Your Phone Number" type="number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <TextField style={inpStyle} label="Enter Your Company Name" type='text' required value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        <TextField
                            select
                            label="Select Your Designation/Role"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            style={inpStyle}
                            required
                        >
                            {designations.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <button
                            style={{ backgroundColor: "blue", color: "white", border: "none", fontWeight: 'bold', fontSize: '20px', padding: "0.5% 3%", borderRadius: "25px", width: "30%", height: "7vh", margin: "1%" }}
                            onClick={handleNext} // Call the function here
                        >
                            NEXT
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Part */}
            <div style={{ width: "50%", height: "100vh" }}>
                <div>
                    <img src={Regimg} style={{ height: "100vh", width: "100%", borderRadius: "40px 0px 0px 40px", }} />
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage1;
