import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const SmoothAreaChartComponent = () => {
  let smoothAreaChart;

  useEffect(() => {
    // Cleanup function
    const cleanup = () => {
      if (smoothAreaChart) {
        smoothAreaChart.destroy();
      }
    };

    // Create the smooth area chart
    createSmoothAreaChart();

    // Cleanup when the component is unmounted or before creating a new chart
    return cleanup;
  }, []); // Empty dependency array to run only once on mount

  const createSmoothAreaChart = () => {
    const canvas = document.getElementById('smoothAreaChart');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      smoothAreaChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Smooth Area Chart',
              data: [10, 20, 15, 25, 18, 30, 22],
              borderColor: '#EEC5A6',
              backgroundColor: '#EEC5A6',
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } else {
      console.error('Could not get 2D context for the canvas.');
    }
  };

  return <canvas id="smoothAreaChart" ></canvas>;
};

export default SmoothAreaChartComponent;
