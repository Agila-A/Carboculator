import { Box, Button, TextField, Typography, MenuItem, Autocomplete, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import SideBar from '../SideBar';
import Mac from './Machine';
import Trans from './Transportation';
import Water from "./Water";
import Electricity from './Electricity';
import Result from './Result';

const Calculate = () => {
     const [activeComponent, setActiveComponent] = useState('machine');

       
  return (
    <Box sx={{ width: '85%', height: '100vh', display: 'flex' }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mt: 10, ml: 10 }}>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black', width: "13.25rem" }} onClick={() => setActiveComponent('machine')}>Machines</Button>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black', width: "13.25rem" }} onClick={() => setActiveComponent('transport')}>Transportation</Button>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black', width: "13.25rem" }} onClick={() => setActiveComponent('water')}>Water Usage</Button>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black', width: "13.25rem" }} onClick={() => setActiveComponent('electricity')}>Electricity</Button>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black', width: "13.25rem" }} onClick={() => setActiveComponent('result')}>Results</Button>
        </Box>
         <Box >
          {activeComponent === 'machine' && <Mac />}
          {activeComponent === 'transport' && <Trans />}
          {activeComponent === 'water' && <Water />}
          {activeComponent === 'electricity' && <Electricity />}
          {activeComponent === 'result' && <Result />}
        </Box>
      </Box>
    </Box>
  );
};

export default Calculate;
