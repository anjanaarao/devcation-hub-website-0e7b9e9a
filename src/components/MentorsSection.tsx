
import React from 'react';
import { Linkedin } from 'lucide-react';

const MentorsSection = () => {
  const firstRowMentors = [
    {
      name: "Radhika Bansal",
      image: "/lovable-uploads/5452a38a-b981-4cea-8fda-fef572dddf50.png",
      linkedin: "https://linkedin.com/in/radhikabansal"
    },
    {
      name: "Sanidhya Goel",
      image: "/lovable-uploads/da954f7f-346d-4a39-ae17-908803fd3db2.png",
      linkedin: "https://linkedin.com/in/sanidhyagoel"
    },
    {
      name: "Tejaswi Tyagi",
      image: "/lovable-uploads/1faf807e-c2c5-442d-8b93-970993007863.png",
      linkedin: "https://linkedin.com/in/tejaswityagi"
    },
    {
      name: "Akanksha Jha",
      image: "/lovable-uploads/b607272d-8584-436b-af15-75fbc3c57e74.png",
      linkedin: "https://linkedin.com/in/akankshajha"
    }
  ];

  const secondRowMentors = [
    {
      name: "Vikranth Udandarao",
      image: "/lovable-uploads/05aa3fb4-ff74-4304-be65-061f8cf664a1.png",
      linkedin: "https://linkedin.com/in/vikranthudandarao"
    },
    {
      name: "Rudra Pratap Dash",
      image: "/lovable-uploads/465fe7be-9424-4ffd-a914-29fbed833121.png",
      linkedin: "https://linkedin.com/in/rudrapratapdash"
    },
    {
      name: "Aishvi Guleria",
      image: "/lovable-uploads/9d9263bf-dd08-4a03-a015-064c0734d786.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/aishviguleria"
    },
    {
      name: "Pratham Batra",
      image: "/lovable-uploads/ba157f27-f833-47b6-83f5-43ab08786ec6.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/prathambatra"
    }
  ];

  const thirdRowMentors = [
    {
      name: "Teeksha Harish",
      image: "/lovable-uploads/4cf8ac8a-771d-438a-ba8b-2584a98bea22.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/teekshaharish"
    },
    {
      name: "Dhruv Bakshi",
      image: "/lovable-uploads/5452a38a-b981-4cea-8fda-fef572dddf50.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/dhruvbakshi"
    },
    {
      name: "Suhani Nagpal",
      image: "/lovable-uploads/da954f7f-346d-4a39-ae17-908803fd3db2.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/suhaninagpal"
    },
    {
      name: "Tanmay Arora",
      image: "/lovable-uploads/1faf807e-c2c5-442d-8b93-970993007863.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/tanmayarora"
    }
  ];

  const fourthRowMentors = [
    {
      name: "Aditya Girdhar",
      image: "/lovable-uploads/b607272d-8584-436b-af15-75fbc3c57e74.png", // Using a placeholder since we don't have this image
      linkedin: "https://linkedin.com/in/adityagirdhar"
    }
  ];

  const renderMentorRow = (mentors) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="team-member-card">
            <div className="h-60 overflow-hidden">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <a 
                href={mentor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin size={20} className="mr-2" />
                <span className="font-medium">{mentor.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Mentors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        {renderMentorRow(firstRowMentors)}
        {renderMentorRow(secondRowMentors)}
        {renderMentorRow(thirdRowMentors)}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="team-member-card">
            <div className="h-60 overflow-hidden">
              <img 
                src={fourthRowMentors[0].image} 
                alt={fourthRowMentors[0].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <a 
                href={fourthRowMentors[0].linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin size={20} className="mr-2" />
                <span className="font-medium">{fourthRowMentors[0].name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
