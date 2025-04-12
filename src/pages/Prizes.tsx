
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrizesSection from '../components/PrizesSection';

const Prizes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PrizesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Prizes;
