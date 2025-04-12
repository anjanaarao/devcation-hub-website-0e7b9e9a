
import React from 'react';
import { Trophy } from 'lucide-react';

const PrizesSection = () => {
  const prizes = [
    {
      title: "Hack & Solve Winners",
      description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons."
    },
    {
      title: "Mini Event Winners",
      description: "Goodies, certificates, social media shoutouts, unstop coupons."
    },
    {
      title: "All Finalists",
      description: "Exciting goodies, certificates, unstop coupons"
    },
    {
      title: "All Participants",
      description: "Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all."
    }
  ];

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Prizes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div key={index} className="prize-card">
              <div className="mb-6 text-yellow-300">
                <Trophy size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{prize.title}</h3>
              <p className="text-center">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;
