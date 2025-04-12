
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MentorsSection from '../components/MentorsSection';

const Mentors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MentorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
