// src/components/EmissionDonutChart.jsx

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const EmissionDonutChart = () => {
  // Chart data (labels + values + colors)
  const data = {
    labels: [
      "Machines",
      "Transportation",
      "Water Usage",
      "Electricity",
      "Other",
    ],
    datasets: [
      {
        data: [46, 25, 8, 16, 5],
        backgroundColor: [
          "#1E1B4B", // Machines - dark purple
          "#4338CA", // Transportation - medium purple
          "#7DD3FC", // Water Usage - light blue
          "#3B82F6", // Electricity - blue
          "#D1D5DB", // Other - gray
        ],
        borderWidth: 0,
        cutout: "60%", // creates the donut hole
      },
    ],
  };

  // Chart configuration
  const options = {
    plugins: {
      legend: {
        display: false, // We'll create a custom legend manually
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{display: "flex",justifyContent: "center",alignItems: "center",maxWidth:"100%",borderRadius: 10,}}>
      {/* Donut Chart */}
      <div style={{ width: "50%", height:"29vh" }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div style={{ width: "40%" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.labels.map((label, index) => (
            <li
              key={label}
              style={{display: "flex",justifyContent: "space-between",marginBottom: 8,}}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{
                    width: 12,
                    height: 12,
                    backgroundColor: data.datasets[0].backgroundColor[index],
                    display: "inline-block",
                    marginRight: 8,
                    borderRadius: "50%",
                  }}
                ></span>
                <span>{label}</span>
              </div>
              <span>{data.datasets[0].data[index]}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmissionDonutChart;
