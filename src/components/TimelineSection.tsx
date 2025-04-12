
import React from 'react';
import { Calendar } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      title: "🎉 Opening Ceremony & Registration 🚀",
      description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
      date: "April 4th, 2025"
    },
    {
      title: "🔒 Hacking Period Starts! 🔓",
      description: "Get ready to code, create, and innovate!",
      date: "April 8th, 2025"
    },
    {
      title: "⏰ Hacking Period Ends ⏰",
      description: "Make sure to wrap up your projects and prepare for submission.",
      date: "April 12th, 2025"
    },
    {
      title: "🕒 Mentorship Round Starts 🕒",
      description: "Providing mentorship and feedback for every submitted project.",
      date: "April 13th, 2025"
    },
    {
      title: "📆 Final pitching and closing ceremony 📆",
      description: "Don't miss out on this memorable event!",
      date: "April 15th, 2025"
    }
  ];

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#4ecbff] mb-4">Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4ecbff]"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-16 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#4ecbff] flex items-center justify-center text-white shadow-lg">
                  <Calendar size={24} />
                </div>
              </div>
              
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#4ecbff] mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                
                <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                  <div className="text-xl font-semibold text-white">{event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
