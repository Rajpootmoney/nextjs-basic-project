import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          Expense Tracker
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-200">Dashboard</a>
          <a href="/transactions" className="hover:text-blue-200">Transactions</a>
          <a href="/reports" className="hover:text-blue-200">Reports</a>
          <a href="/settings" className="hover:text-blue-200">Settings</a>
        </div>

        {/* User Profile / Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* User Profile */}
          <div className="hidden md:block">
            <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700">
              Logout
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="/" className="block px-4 py-2 hover:bg-blue-600">Dashboard</a>
          <a href="/transactions" className="block px-4 py-2 hover:bg-blue-600">Transactions</a>
          <a href="/reports" className="block px-4 py-2 hover:bg-blue-600">Reports</a>
          <a href="/settings" className="block px-4 py-2 hover:bg-blue-600">Settings</a>
          <button className="block w-full text-left px-4 py-2 bg-blue-800 hover:bg-blue-600">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
