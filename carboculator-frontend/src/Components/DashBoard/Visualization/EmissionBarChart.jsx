import React, { useRef, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmissionBarChart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const grad = ctx.createLinearGradient(0, 0, 0, 400);
    grad.addColorStop(0, '#3b82f6');
    grad.addColorStop(1, '#1e3a8a');
    setGradient(grad);
  }, []);

  const data = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Carbon Emitted (Million tonnes)',
        data: [3, 7.5, 6.1, 8.8, 6.2],
        backgroundColor: gradient || '#1e3a8a',
        borderRadius: 8,
        barThickness: 30,
        categoryPercentage: 0.9,
        barPercentage: 1.0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: '( Year )',
          font: { size: 14 },
        }
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: '( Million tonnes )',
          font: { size: 14 },
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '70%' }}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default EmissionBarChart;
