import { TextField, IconButton, InputAdornment ,MenuItem} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import Regimg from "../../assets/RegistrationPage/Regpage2.png"
import { Link } from 'react-router-dom';

const RegistrationPage1 = () => {
  //Data's
  const designations = [
  // Mining & Industrial
  "Mining Engineer","Geologist","Mine Supervisor","Equipment Operator","Drill Operator",
  "Blasting Specialist","Shift In-charge","Site Safety Officer","Environmental Compliance Officer",

  // Environmental & Sustainability
  "Sustainability Officer","Carbon Footprint Analyst","Environmental Consultant","ESG Specialist",
  "Energy Auditor","Waste Management Officer","Climate Analyst","Green Officer","CSR Executive",

  // Technical & Engineering
  "Mechanical Engineer","Electrical Engineer","Process Engineer","Energy Manager",
  "Industrial Automation Engineer","Instrumentation Engineer","Project Engineer",

  // Administrative & Policy
  "Operations Manager","Facility Manager","HSE Manager","Government Inspector",
  "Policy Advisor","Data Entry Officer","Compliance Manager",

  // Business & Stakeholder
  "Business Owner","Company Director","Procurement Officer","Consultant",
  "NGO Representative","Vendor","Sustainability Partner",

  // Academic & Research
  "Environmental Researcher","University Professor","Student – Environmental Science",
  "Climate Change Researcher","Data Scientist – Carbon Analytics",

  // Generic Options
  "Worker","Supervisor","Manager","Consultant",
  "Engineer","Analyst","Officer","Technician","Staff","Other"
];

  //Styling
  const inpStyle={width:"90%",marginBottom:"2%",}

  //useStates
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  //function
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  
  return (
    <div style={{display:'flex',width:"100%",height:"100vh",backgroundColor:"rgba(239, 255, 252, 1)"}}>

       {/* Input Feilds */}
      <div style={{width:"50%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"85%",height:"85vh",backgroundColor:"white",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",position:"relative",overflowY:"auto"}}>
          <h1 style={{fontWeight:'bold',fontSize:"35px",textAlign:"center",padding:"2% 0% 0% 0%"}}>REGISTRATION</h1>
          <h4 style={{fontWeight:"bold",color:"gray",padding:"2% 1%",fontSize:"20px",textAlign:"center"}}>USER DETAILS</h4>
          <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <TextField style={inpStyle} label="Enter Your Name" type='text' required/>
            <TextField style={inpStyle} label="Enter Your Email" type='email' required/>
            <TextField
                label="Enter Your Password"
                type={showPassword ? 'text' : 'password'}
                style={inpStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}required
              />
            <TextField style={inpStyle} label="Enter Your Phone Number" type="number" required/>
            <TextField style={inpStyle} label="Enter Your Company Name" type='text' required/>
            <TextField
              select
              label="Select Your Designation/Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={inpStyle}
            >
              {designations.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))} 
            </TextField>
            <button style={{backgroundColor:"blue",color:"white",border:"none",fontWeight:'bold',fontSize:'20px',padding:"0.5% 3%",borderRadius:"25px",width:"30%",height:"7vh",margin:"1%"}} >
              <Link to='/registration2'>NEXT</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Image Part */}
      <div style={{width:"50%",height:"100vh"}}>
        <div>
          <img src={Regimg} style={{height:"100vh",width:"100%",borderRadius:"40px 0px 0px 40px",}} />
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage1