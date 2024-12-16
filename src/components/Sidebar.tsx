'use client'
import React from 'react';
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-md">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 bg-gray-900 p-4">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
          <Link href="/reports" className="block p-2 hover:bg-gray-700 rounded">
            Reports
          </Link>
          <Link href="/team-members" className="block p-2 hover:bg-gray-700 rounded">
            Team Members
          </Link>
          <Link href="/projects" className="block p-2 hover:bg-gray-700 rounded">
            Projects
          </Link>
          <Link href="/settings" className="block p-2 hover:bg-gray-700 rounded">
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
