
import React from 'react';
import { Brain, BookOpen, Leaf, DollarSign } from 'lucide-react';

const TracksSection = () => {
  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="track-card">
            <div className="mb-6">
              <Brain size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">HealthTech</h3>
            <p className="text-center">
              Develop innovative solutions for healthcare challenges, from patient care to medical research.
            </p>
          </div>
          
          <div className="track-card">
            <div className="mb-6">
              <BookOpen size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">EdTech</h3>
            <p className="text-center">
              Create tools and platforms that revolutionize learning and education for all ages.
            </p>
          </div>
          
          <div className="track-card">
            <div className="mb-6">
              <Leaf size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sustainable Development (Open Innovation)</h3>
            <p className="text-center">
              Build solutions addressing sustainability challenges and environmental issues.
            </p>
          </div>
          
          <div className="track-card">
            <div className="mb-6">
              <DollarSign size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">FinTech</h3>
            <p className="text-center">
              Innovate in the financial technology space with solutions for banking, payments, and financial inclusion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
