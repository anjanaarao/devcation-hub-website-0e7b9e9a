
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JudgesSection from '../components/JudgesSection';

const Judges = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <JudgesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Judges;
