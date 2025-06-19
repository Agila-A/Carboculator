import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const MultiLineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2022",
        data: [
          320000, 250000, 300000, 280000, 400000, 370000, 420000, 390000,
          500000, 450000, 380000, 430000,
        ],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4, // smooth curve
        borderWidth: 2,
      },
      {
        label: "2023",
        data: [
          310000, 280000, 260000, 320000, 350000, 400000, 360000, 340000,
          300000, 250000, 290000, 330000,
        ],
        borderColor: "#60a5fa",
        backgroundColor: "#60a5fa",
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "2024",
        data: [
          330000, 360000, 310000, 270000, 390000, 420000, 460000, 480000,
          560000, 550000, 540000, 520000,
        ],
        borderColor: "#1e3a8a",
        backgroundColor: "#1e3a8a",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Amount",
          font: {
            size: 14,
          },
        },
        ticks: {
          callback: function (value) {
            return value / 1000 + "k";
          },
        },
        min: 100000,
        max: 600000,
      },
      x: {
        title: {
          display: true,
          text: "Month",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "80%" }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
