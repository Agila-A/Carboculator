import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { useEmission } from "../../Context/EmmissionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmissionDonutChart = () => {
  const { totalEmission, percentageBreakdown } = useEmission();

  const mac = Number(percentageBreakdown.emission) || 0;
  const trans = Number(percentageBreakdown.transport) || 0;
  const elec = Number(percentageBreakdown.electricity) || 0;
  const other = totalEmission ? (100 - (mac + trans + elec)) : 0;

  const data = {
    labels: ["Machines", "Transportation", "Electricity", "Other"],
    datasets: [
      {
        data: [mac, trans, elec, other],
        backgroundColor: [
          "#4338CA", // Machines
          "#7DD3FC", // Transportation
          "#3B82F6", // Electricity
          "#D1D5DB", // Other
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
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", maxWidth:"90%", borderRadius: 10, margin:"0% 0% 0% 3%"}}>
      {/* Donut Chart */}
      <div style={{ width: "50%", height:"29vh" }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div style={{ width: "45%" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.labels.map((label, index) => (
            <li key={label} style={{display: "flex", justifyContent: "space-between", marginBottom: 8}}>
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
