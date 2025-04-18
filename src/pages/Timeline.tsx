
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
};

export default Timeline;
