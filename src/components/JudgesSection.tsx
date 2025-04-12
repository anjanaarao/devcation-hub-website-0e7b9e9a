
import React from 'react';
import { Linkedin } from 'lucide-react';

const JudgesSection = () => {
  const judges = [
    {
      name: "Kartik Mathur",
      image: "/lovable-uploads/9d9263bf-dd08-4a03-a015-064c0734d786.png",
      linkedin: "https://linkedin.com/in/kartikmathur"
    },
    {
      name: "Vani Chitkara",
      image: "/lovable-uploads/ba157f27-f833-47b6-83f5-43ab08786ec6.png",
      linkedin: "https://linkedin.com/in/vanichitkara"
    },
    {
      name: "Aarnav Jindal",
      image: "/lovable-uploads/4cf8ac8a-771d-438a-ba8b-2584a98bea22.png",
      linkedin: "https://linkedin.com/in/aarnavjindal"
    }
  ];

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Judges</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {judges.map((judge, index) => (
            <div key={index} className="team-member-card">
              <div className="h-80 overflow-hidden">
                <img 
                  src={judge.image} 
                  alt={judge.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                <a 
                  href={judge.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin size={20} className="mr-2" />
                  <span className="font-medium">{judge.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgesSection;
