
import React from 'react';
import { Brain, LightbulbIcon, Leaf, DollarSign } from 'lucide-react';

const TracksSection = () => {
  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#4ecbff] mb-4">Tracks</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4ecbff] to-[#0082ca] rounded-lg p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <Brain size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">HealthTech</h3>
            <p className="text-center">
              Develop innovative solutions for healthcare challenges.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#4ecbff] to-[#0082ca] rounded-lg p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <LightbulbIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">EdTech</h3>
            <p className="text-center">
              Create the next generation of educational tools and platforms.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#4ecbff] to-[#0082ca] rounded-lg p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <Leaf size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Sustainable Development</h3>
            <p className="text-center">
              (Open Innovation)<br/>
              Build solutions addressing sustainability challenges.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#4ecbff] to-[#0082ca] rounded-lg p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
