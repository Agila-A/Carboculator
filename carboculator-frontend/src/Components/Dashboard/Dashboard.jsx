import { Box, Card, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react';
import SideBar from './SideBar';
import Display from '../Dashboard/Display';
import Calculate from './Calculatation/Calculate';
import PlantTree from './PlantTree';
import Credits from './Credits';
import Visualize from './Visualization/Visualize';
const Dash = () => {
  const [activePage, setActivePage] = useState('display');

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', overflow: 'hidden' }}>
  
      <SideBar setActivePage={setActivePage} />
      {activePage === 'display' && <Display />}
      {activePage === 'calculate' && <Calculate />}
      {activePage === 'visualize' && <Visualize />}
      {activePage === 'tree' && <PlantTree />}
      {activePage === 'monitor' && <Monitor />}
      {activePage === 'credits' && <Credits />}

    </Box>
  );
};

export default Dash;


