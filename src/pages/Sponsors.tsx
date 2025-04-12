
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SponsorsSection from '../components/SponsorsSection';

const Sponsors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
