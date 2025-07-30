import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import water from "../../../assets/Dashboardimg/water.png"
const Electricity = () => {
  return (
     <Box sx={{width:"100%",maxWidth:'66.25rem',minHeight: "31.8rem",border:'2px solid grey',ml:"5rem",mr:"2.5rem",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          {/* content */}
          <Box sx={{width:'40%',height:'70% ',display:'flex',flexDirection:'column',gap:"3rem",justifyContent:"center",alignItems:'center'}}>
          <Box sx={{display:'flex',gap:"2rem"}}> 
          <Box sx={{width:"12.5rem",height:"3.44rem",backgroundColor:'#446891',borderRadius:"6px",color:'white',display:"flex",justifyContent:'center',alignItems:'center'}}>Source Of Electricity</Box> 
          <TextField label='Source'></TextField>
          </Box>
          <Box sx={{display:'flex',gap:"2rem"}}> 
          <Box sx={{width:"12.5rem",height:"3.44rem",backgroundColor:'#446891',borderRadius:"6px",color:'white',display:"flex",justifyContent:'center',alignItems:'center'}}>Total Amount Consumed</Box> 
          <TextField label='Amount Consumed'></TextField>
          </Box>
          <Box sx={{display:'flex',gap:"2rem"}}> 
          <Box sx={{width:"12.5rem",height:"3.44rem",backgroundColor:'#446891',borderRadius:"6px",color:'white',display:"flex",justifyContent:'center',alignItems:'center'}}>Emission Factor</Box> 
          <TextField label='Extraction'></TextField>
          </Box>
    
          </Box>
          {/* img */}
          <Box sx={{width:"30%",height:'70%',display:'flex',flexDirection:'column',gap:"3rem"}}>
             <img src={water} style={{width:'15rem',height:'15rem'}}  />
             <Typography variant='body2' sx={{fontSize:"1rem"}}>The amount of electricity consumed in kwh during the mining process should be noted and calculated to find the Carbon Footprint of the mine</Typography>
    
          </Box>
    
    
        </Box>
  )
}

export default Electricity
