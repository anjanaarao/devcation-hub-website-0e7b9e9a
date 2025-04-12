
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TracksSection from '../components/TracksSection';
import JudgesSection from '../components/JudgesSection';
import MentorsSection from '../components/MentorsSection';
import TimelineSection from '../components/TimelineSection';
import PrizesSection from '../components/PrizesSection';
import SponsorsSection from '../components/SponsorsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <JudgesSection />
        <MentorsSection />
        <TimelineSection />
        <PrizesSection />
        <SponsorsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
