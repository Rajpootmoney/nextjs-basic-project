import React from "react";
import styles from "@/styles/summaryStats.module.css";

interface Props {
  data: {
    total: number;
    byCategory: { category: string; amount: number }[];
  };
}

const SummaryStats: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.summaryStats}>
      <h2 className={styles.title}>Summary</h2>
      <div className={styles.stat}>
        <h3>Total Spent</h3>
        <p>${data.total}</p>
      </div>
      <div className={styles.categoryBreakdown}>
        <h3>By Category</h3>
        <ul>
          {data.byCategory.map((item) => (
            <li key={item.category}>
              {item.category}: ${item.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryStats;
