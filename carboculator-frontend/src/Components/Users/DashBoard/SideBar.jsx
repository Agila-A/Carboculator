import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import logo from '../../../assets/Dashboardimg/logo.png';
import { useNavigate } from 'react-router-dom';

const sidebarItem1 = [
  { icon: <HomeOutlinedIcon />, text: 'Home', page: 'display' },
  { icon: <CalculateOutlinedIcon />, text: 'Calculate', page: 'Calculate' },
  { icon: <TimelineOutlinedIcon />, text: 'Monitor', page: 'Monitor' },
  { icon: <SpaOutlinedIcon />, text: 'Plant a Tree', page: 'Plant Tree' },
  { icon: <MonetizationOnOutlinedIcon />, text: 'Credits', page: 'Credits' },
];

const sidebarItem2 = [
  { icon: <FeedbackOutlinedIcon />, text: 'Feedback' },
  { icon: <NotificationsActiveOutlinedIcon />, text: 'Notification' },
  { icon: <SettingsOutlinedIcon />, text: 'Settings' },
  { icon: <LogoutOutlinedIcon />, text: 'Logout', isLogout: true },
];



const SideBar = ({ activePage,setActivePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <Box
      sx={{
        ml: 0,
        width: { xs: '60px', sm: '80px', md: '15%' },
        maxHeight: '100vh',
        backgroundColor: 'rgba(213, 213, 213, 0.55)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 10px rgba(0,0,0,0.05)',
        p: 2,
        borderRadius:"0px 20px 20px 0px"
      }}
    >
      <img src={logo} alt="Logo" />

      <Box sx={{ flexGrow: 1 }}>
        <List>
          {sidebarItem1.map((item, index) => (
            <ListItem key={index} disablePadding onClick={() => setActivePage(item.page)} >
              <ListItemButton
                
                sx={{
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  backgroundColor:
                    activePage === item.page ? 'rgba(128, 128, 128, 0.55)' : 'transparent', // blue-500
                 
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
                  primaryTypographyProps={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#1c2a3b',
                  }}
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
                onClick={() => {
                  if (item.isLogout) {
                    handleLogout();
                  }
                }}
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
                  primaryTypographyProps={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#1c2a3b',
                  }}
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
