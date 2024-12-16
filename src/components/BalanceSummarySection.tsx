import React from "react";

type BalanceSummaryProps = {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
};

const BalanceSummary: React.FC<BalanceSummaryProps> = ({
  totalBalance,
  totalIncome,
  totalExpenses,
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Net Balance Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-700">Net Balance</h3>
          <p
            className={`text-2xl font-semibold ${
              totalBalance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹{totalBalance.toFixed(2)}
          </p>
        </div>

        {/* Total Income Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-700">Total Income</h3>
          <p className="text-2xl font-semibold text-green-600">
            ₹{totalIncome.toFixed(2)}
          </p>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-700">Total Expenses</h3>
          <p className="text-2xl font-semibold text-red-600">
            ₹{totalExpenses.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
