import React from 'react';
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
import { Box } from '@mui/material'; 

const Dummy = () => {
  const data = [
    { year: "2021", emitted: 1400, neutralized: 800 },
    { year: "2022", emitted: 700, neutralized: 300 },
    { year: "2023", emitted: 800, neutralized: 400 },
    { year: "2024", emitted: 1200, neutralized: 900 },
  ];

  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <ResponsiveContainer width="30%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="emitted" fill="#2b59c3" name="Carbon Emitted" />
          <Bar dataKey="neutralized" fill="#b0bec5" name="Carbon Neutralized" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
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

    </Box>
  );
};

export default Dummy;
