type TransactionModalProps = {
    isOpen: boolean; // To control modal visibility
    onClose: () => void; // Function to close the modal
    onSubmit: (transaction: Transaction) => void; // Callback for form submission
  };
  import React, { useState } from "react";

  // Transaction type
  type Transaction = {
    id: string;
    date: string;
    amount: number;
    category: string;
    description: string;
  };
  
  const TransactionModal: React.FC<TransactionModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
  }) => {
    const [formData, setFormData] = useState<Transaction>({
      id: "",
      date: "",
      amount: 0,
      category: "",
      description: "",
    });
  
    if (!isOpen) return null;
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      onSubmit({ ...formData, id: Date.now().toString() }); // Add unique ID
      onClose(); // Close the modal after submission
    };
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-lg font-bold mb-4">Add New Transaction</h2>
  
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
  
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TransactionModal;
    