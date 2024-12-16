// Props for the AddTransactionButton component
type AddTransactionButtonProps = {
  onAddTransaction: () => void; // Function to handle modal open
};

import React from 'react';

const AddTransactionButton: React.FC<AddTransactionButtonProps> = ({
  onAddTransaction,
}) => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all"
      onClick={onAddTransaction}
    >
      + Add Transaction
    </button>
  );
};

export default AddTransactionButton;
