
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TracksSection from '../components/TracksSection';

const Tracks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TracksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Tracks;
