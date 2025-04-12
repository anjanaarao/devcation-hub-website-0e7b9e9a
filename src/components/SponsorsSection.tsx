
import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Rotaract",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/89/Rotary_International_Logo_2013.svg", // Placeholder
      link: "https://rotaract.org/"
    },
    {
      name: "Unstop",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-white-background.png", // Placeholder
      link: "https://unstop.com/"
    },
    {
      name: "Dev Community",
      logo: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg", // Placeholder
      link: "https://dev.to/"
    },
    {
      name: "Sprint",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sprint_Corporation_logo.svg/1200px-Sprint_Corporation_logo.svg.png", // Placeholder
      link: "https://sprint.com/"
    },
    {
      name: "Interview Buddy",
      logo: "https://interviewbuddy.in/assets/img/interview-buddy-logo.svg", // Placeholder
      link: "https://interviewbuddy.in/"
    },
    {
      name: "Codecrafter",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-coding-web-development-logo-programming-c-lettering-3d-7596.png", // Placeholder
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
