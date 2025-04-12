
import React from 'react';
import { Linkedin } from 'lucide-react';

const JudgesSection = () => {
  const judges = [
    {
      name: "Kartik Mathur",
      image: "/lovable-uploads/650218db-9fd9-43e4-b8ea-596f4e4f79d0.png",
      linkedin: "https://linkedin.com/in/kartikmathur"
    },
    {
      name: "Vani Chitkara",
      image: "/lovable-uploads/ac69c31b-d628-44fe-8663-a941c7a063b5.png",
      linkedin: "https://linkedin.com/in/vanichitkara"
    },
    {
      name: "Aarnav Jindal",
      image: "/lovable-uploads/a238679c-e29c-4a03-9d7c-f54a900c24d5.png",
      linkedin: "https://linkedin.com/in/aarnavjindal"
    }
  ];

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#4ecbff] mb-4">Judges</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {judges.map((judge, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <div className="h-80 overflow-hidden">
                <img 
                  src={judge.image} 
                  alt={judge.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#4ecbff] text-white p-4 flex items-center justify-between">
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
