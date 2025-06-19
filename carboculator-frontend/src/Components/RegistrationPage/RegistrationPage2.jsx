import { TextField ,MenuItem } from '@mui/material'
import React, { useState } from 'react'
import Regimg from "../../assets/RegistrationPage/Regpage1.png"
import { Link } from 'react-router-dom';

const RegistrationPage2 = () => {
  //Data
  const mineTypes = [
  "Open-Pit Mine",
  "Underground Mine",
  "Strip Mine",
  "Placer Mine",
  "Mountaintop Removal Mine",
  "In-situ (Solution) Mine",
  "Quarry"
  ];

  const mineLocations = [
  "Dhanbad, Jharkhand",
  "Bokaro, Jharkhand",
  "Korba, Chhattisgarh",
  "Raigarh, Chhattisgarh",
  "Keonjhar, Odisha",
  "Sundargarh, Odisha",
  "Singrauli, Madhya Pradesh",
  "Panna, Madhya Pradesh",
  "Nagpur, Maharashtra",
  "Chandrapur, Maharashtra",
  "Udaipur, Rajasthan",
  "Makrana, Rajasthan",
  "Bicholim, Goa",
  "Bellary, Karnataka",
  "Kolar, Karnataka",
  "Neyveli, Tamil Nadu",
  "Singareni, Telangana",
  "Cuddapah, Andhra Pradesh"
];

  //Styling
  const inpStyle={width:"90%",marginBottom:"2%"}

  //useStates
  const [type , setType]=useState("");
  const [size , setSize]=useState("");
  const [location,setLoacation]=useState("");
  return (
    <div style={{display:'flex',width:"100%",height:"100vh",backgroundColor:"rgba(239, 255, 252, 1)"}}>
     
      <div style={{width:"50%",height:"100vh"}}>
        <div>
          <img src={Regimg} style={{height:"100vh",width:"100%",borderRadius:"0px 40px 40px 0px",}} />
        </div>
      </div>

       {/* Input Feilds */}
      <div style={{width:"50%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"85%",height:"85vh",backgroundColor:"white",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",position:"relative",overflowY:"auto"}}>
          <h1 style={{fontWeight:'bold',fontSize:"35px",textAlign:"center",padding:"2% 0% 0% 0%"}}>REGISTRATION</h1>
          <h4 style={{fontWeight:"bold",color:"gray",padding:"2% 1%",fontSize:"20px",textAlign:"center"}}>MINE DETAILS</h4>
          <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <TextField required style={inpStyle} label="Enter Mine Name" type='text'/>
          <TextField
            select
            label="Select Your Designation/Role"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={inpStyle}
          >
            {mineTypes.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))} 
          </TextField>
          <TextField select style={inpStyle} label="Select Mine Size" value={size} onChange={(e)=>setSize(e.target.value)}>
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </TextField>
      
          <TextField select style={inpStyle} label="Select Mine Location" value={location} onChange={(e)=>setLoacation(e.target.value)}>
              {mineLocations.map((location,index)=>(
                <MenuItem value={location} key={index}>
                  {location}
                </MenuItem>
              ))}
          </TextField>
          <TextField style={inpStyle} label="Enter Annual Coal Production (Tonnes)" required/>
          <TextField style={inpStyle} label="Enter Annual Energy Consumption (MWh)" required/>
          <button style={{backgroundColor:"blue",color:"white",border:"none",fontWeight:'bold',fontSize:'20px',padding:"0.5% 3%",borderRadius:"25px",width:"30%",height:"7vh",margin:"1%"}}>
            <Link to="/dash">COMPLETE</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage2