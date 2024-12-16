import React, { useState } from "react";


// Transaction type for each transaction record
type Transaction = {
    id: string;
    date: string; // ISO Date String
    amount: number;
    category: string;
    description: string;
  };
  
  // Props for the TransactionList component
  type TransactionListProps = {
    transactions: Transaction[]; // Array of transactions
    onFilterChange: (filter: string) => void; // Function for filter changes
  };
  


const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onFilterChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const itemsPerPage = 5; // Number of transactions per page

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Filter and Sort Options */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <label htmlFor="filter" className="text-gray-700 mr-2">
            Filter by:
          </label>
          <select
            id="filter"
            onChange={(e) => onFilterChange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">All</option>
            <option value="date">Date</option>
            <option value="category">Category</option>
            <option value="amount">Amount</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTransactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-gray-300 text-center"
            >
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2 text-green-600">
                ₹{transaction.amount.toFixed(2)}
              </td>
              <td className="px-4 py-2">{transaction.category}</td>
              <td className="px-4 py-2">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center items-center">
        {Array.from({
          length: Math.ceil(transactions.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
