
import React from 'react';

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
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Sponsors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <a 
                href={sponsor.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 h-full flex items-center justify-center"
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
