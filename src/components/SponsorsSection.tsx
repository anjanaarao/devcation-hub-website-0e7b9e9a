
import React from 'react';
import { ExternalLink } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Rotaract",
      logo: "/lovable-uploads/c5d0bde0-ca3c-4ae5-8735-29d24b8feca2.png",
      link: "https://rotaract.org/"
    },
    {
      name: "Unstop",
      logo: "/lovable-uploads/9a52f90d-c538-44a0-be6c-9aed847cafb4.png",
      link: "https://unstop.com/"
    },
    {
      name: "Dev Community",
      logo: "/lovable-uploads/074108f6-5bd2-4395-9b57-b93db008d165.png",
      link: "https://dev.to/"
    },
    {
      name: "Sprint",
      logo: "/lovable-uploads/066dc7f5-a799-46d2-b951-602fc5ac4af9.png",
      link: "https://sprint.com/"
    },
    {
      name: "Interview Buddy",
      logo: "/lovable-uploads/0c6f2544-0610-49d9-8d29-e10106ff6884.png",
      link: "https://interviewbuddy.in/"
    },
    {
      name: "Codecrafter",
      logo: "/lovable-uploads/ddbd6401-b23c-4b52-8590-16142b2983d3.png",
      link: "https://codecrafter.dev/"
    }
  ];

  return (
    <div className="py-20 bg-google-darkblue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-google-blue blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-google-red blur-3xl"></div>
        <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-google-yellow blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Our amazing sponsors who make this event possible. We're grateful for their continued support.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-sm rounded-lg overflow-hidden border border-blue-800/30 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-950/70 opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <a 
                href={sponsor.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-8 h-full relative z-10 flex flex-col items-center justify-center"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                />
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="text-[#4ecbff] font-medium flex items-center justify-center">
                    Visit <ExternalLink size={16} className="ml-1" />
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
