import React from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto"; // Include Chart.js
import styles from "@/styles/chartContainer.module.css";

interface Props {
  data: {
    trends: { month: string; amount: number }[];
  };
}

const ChartContainer: React.FC<Props> = ({ data }) => {
  const lineChartData = {
    labels: data.map((point) => point.month),
    datasets: [
      {
        label: "Monthly Spending",
        data: data.map((point) => point.amount),
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  const pieChartData = {
    labels: data.byCategory.map((item) => item.category),
    datasets: [
      {
        data: data.byCategory.map((item) => item.amount),
        backgroundColor: ["red", "green", "blue", "yellow"],
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.lineChart}>
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>
      <div className={styles.pieChart}>
        <Pie data={pieChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default ChartContainer;
