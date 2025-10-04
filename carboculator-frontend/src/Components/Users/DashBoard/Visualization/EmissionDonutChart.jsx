import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const EmissionDonutChart = () => {
  const [emissionData, setEmissionData] = useState({
    totalMachineEmission: 0,
    totalTransportEmission: 0,
    totalElectricityEmission: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchEmissionData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/emission", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
        setEmissionData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch emission data:", err);
        // Check for a 401 Unauthorized status and provide a user-friendly message
        if (err.response && err.response.status === 401) {
            setError("You are not authorized. Please log in.");
        } else {
            setError("No Data available. Kindly enter the input details");
        }
        setLoading(false);
      }
    };
    fetchEmissionData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Loading chart data...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", padding: "20px", color: "blue" }}>{error}</div>;
  }

  const { totalMachineEmission, totalTransportEmission, totalElectricityEmission } = emissionData;

  const machine = Number(totalMachineEmission) || 0;
  const transport = Number(totalTransportEmission) || 0;
  const electricity = Number(totalElectricityEmission) || 0;
  const total = machine + transport + electricity;

  const mac = total ? (machine / total) * 100 : 0;
  const trans = total ? (transport / total) * 100 : 0;
  const elec = total ? (electricity / total) * 100 : 0;
  const other = total ? (100 - (mac + trans + elec)) : 0;

  const data = {
    labels: ["Machines", "Transportation", "Electricity", "Other"],
    datasets: [
      {
        data: [mac, trans, elec, other],
        backgroundColor: [
          "#4338CA",
          "#7DD3FC",
          "#3B82F6",
          "#D1D5DB",
        ],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: ${value.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "90%", borderRadius: 10, margin: "0% 0% 0% 3%" }}>
      {/* Donut Chart */}
      <div style={{ width: "50%", height: "29vh" }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div style={{ width: "45%" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.labels.map((label, index) => (
            <li key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{
                  width: 12,
                  height: 12,
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  display: "inline-block",
                  marginRight: 8,
                  borderRadius: "50%",
                }}></span>
                <span>{label}</span>
              </div>
              <span>{data.datasets[0].data[index].toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmissionDonutChart;