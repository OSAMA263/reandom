import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

// global style or you can make it local on each comp for different styles for each componenet
defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function CChartJs() {
  return (
    <div className="grid grid-cols-2 [&>div]:border [&>div]:relative [&>div]:h-[50vh] h-dvh gap-2">
      <div className="col-span-2">
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: { text: "cock", display: true },
            },
            elements: {
              line: { tension: 0.8 },
            },
          }}
          data={data.line}
        />
      </div>
      <div>
        <Bar data={data.bar} />
      </div>
      <div>
        <Doughnut data={data.bar} />
      </div>
    </div>
  );
}

const data = {
  bar: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [12, 54, 12, 5],
        backgroundColor: ["black", "yellow", "green", "pink"],
        borderRadius: 20,
      },
    ],
  },

  line: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [150000, 80020, 15000, 111680],
        borderColor: "blue",
      },
      {
        label: "Sales",
        data: [20000, 16000, 100000, 4200],
        borderColor: "red",
      },
    ],
  },
};
