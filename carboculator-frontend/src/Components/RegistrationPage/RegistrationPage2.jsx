import { TextField } from '@mui/material'
import React from 'react'
import Regimg from "../../assets/RegistrationPage/Regpage1.png"

const RegistrationPage2 = () => {
  return (
    <div style={{display:'flex',width:"100%",height:"100vh",backgroundColor:"rgba(239, 255, 252, 1)"}}>
      
      <div style={{width:"50%",height:"100vh"}}>
        <div>
          <img src={Regimg} style={{height:"100vh",width:"100%",borderRadius:"0px 40px 40px 0px",}} />
        </div>
      </div>
      <div style={{width:"50%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"85%",height:"85vh",backgroundColor:"white",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",position:"relative",overflowY:"auto"}}>
          <h1 style={{fontWeight:'bold',fontSize:"35px",textAlign:"center",padding:"2% 0% 0% 0%"}}>REGISTRATION</h1>
          <h4 style={{fontWeight:"bold",color:"gray",padding:"2% 1%",fontSize:"20px",textAlign:"center"}}>MINE DETAILS</h4>
          <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Name" />
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Email" />
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Phone Number" />
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Company Name"/>
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Password"/>
          <TextField style={{width:"90%",marginBottom:"2%",}} label="Enter Your Designation/Role"/>
          <button style={{backgroundColor:"blue",color:"white",border:"none",fontWeight:'bold',fontSize:'20px',padding:"0.5% 3%",borderRadius:"25px",width:"30%",height:"7vh",margin:"1%"}}>COMPLETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage2