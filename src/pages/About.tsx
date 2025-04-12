
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 bg-google-darkblue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="section-title mb-4">About Us</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
            </div>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
