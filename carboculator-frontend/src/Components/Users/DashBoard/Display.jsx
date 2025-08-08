import React from 'react';
import { Box, Card, CardMedia,CardContent, Typography } from '@mui/material';
import co2 from '../../../assets/Dashboardimg/co2.png';
import emmision from '../../../assets/Dashboardimg/emmision.png';
import quota from '../../../assets/Dashboardimg/quota.png';
import credits from '../../../assets/Dashboardimg/credits.png';
import cal from '../../../assets/Dashboardimg/cal.jpg';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Visualize from './Visualization/Visualize';


const Display = ({setActivePage}) => {
  const data = [
  { year: "2021", emitted: 1400, neutralized: 800 },
  { year: "2022", emitted: 700, neutralized: 300 },
  { year: "2023", emitted: 800, neutralized: 400 },
  { year: "2024", emitted: 1200, neutralized: 900 },
];

  const dashimg=[
    {img:emmision,name:"Calculate",path:"/calculate"},
    {img:credits,name:"Monitor",path:"/monitor"},
    {img:co2,name:"Plant Tree",path:"/plant-tree"},
    {img:quota,name:"Credits",path:"/credits"}
  ]

  return (
    <Box sx={{ p: 2, width:'85%',backgroundColor: '#f9f9f9', minHeight: '100vh',display:'flex',flexDirection:"column",gap:'1rem',overflowY:"auto"}}>
      {/* Title */}
      <Box sx={{ px: '2rem', mb: '2rem' }}>
        <Typography fontWeight="bold" color="#222" sx={{ fontSize: '2rem' }}>
          Carboculator
        </Typography>
      </Box>


      {/* Top Four Cards */}
      <Box
        
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: "space-around",
          mb: 0,
          gap: 2,
          
        }}
        
      >
        {dashimg.map((image, idx) => (
          <Card
            key={idx}
            sx={{
              width: "100%",
              maxWidth: "14.375rem",
              borderRadius: 4,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              height:"8.5rem",
              border:"2px solid #ddd",
              '&:hover': {
                transform: 'scale(1.015)',
                borderColor: '#446891',
                boxShadow: '0 12px 25px rgba(0, 0, 0, 0.12)',
              },
            }}
            onClick={() => {
              setActivePage(image.name)
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={image.img}
              alt={image.name}
              sx={{
                width: '100%',
                height: 100,
                objectFit: 'cover',
                borderRadius: '16px 16px 0 0'
              }}
            />

            {/* Text Below Image */}
            <CardContent sx={{ textAlign: 'center', p: 0 ,bgcolor:"none"}}>
              <Typography variant="h6" fontWeight="bold">
                {image.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>


      {/* Middle Graphs */}
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
         justifyContent:'space-around',
          mb: 4,

        }}
      >
        <Card
          sx={{
            width: "25%",
            height: "100%",
            borderRadius: 4,
            border: '2px solid #ccc',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'scale(1.01)',
              borderColor: '#446891',
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
            },
          }}
        >
          <ResponsiveContainer width="90%" height={250}>
                  <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="emitted" fill="#2b59c3" name="Carbon Emitted" />
                    <Bar dataKey="neutralized" fill="#b0bec5" name="Carbon Neutralized" />
                  </BarChart>
                </ResponsiveContainer>
         
        </Card>

        <Card
          sx={{
            width: "60%",
            height: "100%",
            borderRadius: 4,
            border: '2px solid #ccc',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'scale(1.01)',
              borderColor: '#446891',
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
            },
          }}
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emitted" stroke="#ff6f61" name="Carbon Emitted" strokeWidth={2} />
              <Line type="natural" dataKey="neutralized" stroke="#4caf50" name="Carbon Neutralized" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Box>

      {/* Bottom Card 
      <Card
        sx={{
          width: '93%',
          height: "15%",
          ml:5,
          borderRadius: 4,
          border: '2px solid #ddd',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.005)',
            borderColor: '#446891',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={cal}
          alt="Calculation"
          sx={{ width: '100%', height: '80%', objectFit: 'cover' }}
        />
      </Card>   */}
      <Visualize />
    </Box>
  );
};

export default Display;
