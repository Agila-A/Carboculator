import { Box, Card, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import SideBar from './SideBar';
import Display from './Display';
import Calculate from './Calculatation/Calculate';
import PlantTree from './PlantTree';
import Credits from './Credits';
import Monitor from './Monitor';
const Dash = () => {
  const [activePage, setActivePage] = useState('display');

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', overflow: 'hidden' }}>
  
      <SideBar activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'display' && <Display setActivePage={setActivePage}/>}
      {activePage === 'Calculate' && <Calculate />}
      {activePage === 'Monitor' && <Monitor />}
      {activePage === 'Plant Tree' && <PlantTree />}
      {activePage === 'Credits' && <Credits />}

    </Box>
  );
};

export default Dash;


