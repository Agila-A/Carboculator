import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import logo from '../../assets/Dashboardimg/logo.png'

const sidebarItem1 = [
  { icon: <HomeOutlinedIcon />, text: 'Home' },
  { icon: <CalculateOutlinedIcon />, text: 'Calculate' },
  { icon: <TimelineOutlinedIcon />, text: 'Visualize' },
  { icon: <SpaOutlinedIcon />, text: 'Plant a Tree' },
  { icon: <NotificationsActiveOutlinedIcon />, text: 'Monitor' },
  { icon: <MonetizationOnOutlinedIcon />, text: 'Credits' },
];
const sidebarItem2 = [
  { icon: <FeedbackOutlinedIcon />, text: 'Feedback' },
  { icon: <NotificationsActiveOutlinedIcon />, text: 'Notification' },
  { icon: <SettingsOutlinedIcon />, text: 'Settings' },
  { icon: <LogoutOutlinedIcon />, text: 'Logout' },
];

const SideBar = () => {
  return (
    <Box
      sx={{
        ml:0,
        width: "15%",
        maxHeight: '100vh',
        backgroundColor: 'rgba(213, 213, 213, 0.55)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 10px rgba(0,0,0,0.05)',
         p:1,
      }}
    >
      <img src={logo}></img>

      <Box sx={{ flexGrow: 1 }}>
        <List>
          {sidebarItem1.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(128, 128, 128, 0.55)', 
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#4a5d73', minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: 17, fontWeight: 500, color: '#1c2a3b' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <List>
          {sidebarItem2.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(128, 128, 128, 0.55)', 
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#4a5d73', minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: 17, fontWeight: 500, color: '#1c2a3b' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;