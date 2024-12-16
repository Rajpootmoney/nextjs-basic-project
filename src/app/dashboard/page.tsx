// 'use client'
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { getDashboardData } from "@/lib/fetcher"; 
// import styles from "./dashboard.module.css";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [data, setData] = useState({
//     total: 0,
//     byCategory: [],
//     trends: [],
//   });
//   const [dateRange, setDateRange] = useState({ start: "", end: "" });

//   useEffect(() => {
//     async function fetchData() {
//       const response = await getDashboardData(dateRange.start, dateRange.end);
//       setData(response);
//     }

//     fetchData();
//   }, [dateRange]);

//   return (
//     <div className={styles.dashboard}>
//       <h1 className={styles.title}>Dashboard</h1>
//     </div>
//   );
// }
'use client'

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BalanceSummary from "../../components/BalanceSummarySection";
import TransactionList from "../../components/TransactionList";
import AddTransactionButton from "../../components/AddTransactionButton";
import TransactionModal from "../../components/TransactionModal";


// Transaction type
type Transaction = {
  id: string;
  date: string; // ISO Date String
  amount: number;
  category: string;
  description: string;
};

const MainPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]); // State to hold transactions
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Calculate totals
  const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  // Handle Add Transaction button click
  const handleAddTransaction = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle new transaction submission
  const handleSubmitTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]); // Add new transaction
    setIsModalOpen(false); // Close modal
  };

  // Handle filter change for TransactionList
  const handleFilterChange = (filter: string) => {
    // Implement your filter logic here
    console.log(`Filter applied: ${filter}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Balance Summary */}
      <div className="container mx-auto mt-6">
        <BalanceSummary
          totalBalance={totalBalance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
      </div>

      {/* Transaction List */}
      <div className="container mx-auto mt-6">
        <TransactionList transactions={transactions} onFilterChange={handleFilterChange} />
      </div>

      {/* Add Transaction Button */}
      <AddTransactionButton onAddTransaction={handleAddTransaction} />

      {/* Transaction Modal */}
      <TransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTransaction}
      />
    </div>
  );
};

export default MainPage;
