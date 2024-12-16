// login/layout.tsx

import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
