// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <main className="w-full flex-1 pt-10 pb-20">
        <div className="max-w-screen-xl mx-auto space-y-14">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;