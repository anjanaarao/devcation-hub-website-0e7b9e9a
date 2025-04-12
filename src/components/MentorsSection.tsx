
import React from 'react';
import { Linkedin } from 'lucide-react';

const MentorsSection = () => {
  const firstRowMentors = [
    {
      name: "Radhika Bansal",
      image: "/lovable-uploads/37705ffe-ddc2-41a1-b789-17bddc476162.png",
      linkedin: "https://linkedin.com/in/radhikabansal"
    },
    {
      name: "Sanidhya Goel",
      image: "/lovable-uploads/a3313692-9611-48fd-8d92-d88af8516942.png",
      linkedin: "https://linkedin.com/in/sanidhyagoel"
    },
    {
      name: "Tejaswi Tyagi",
      image: "/lovable-uploads/84d21aae-c70b-4dfe-b6d5-c75853c780ed.png",
      linkedin: "https://linkedin.com/in/tejaswityagi"
    },
    {
      name: "Akanksha Jha",
      image: "/lovable-uploads/9e132ccb-d793-4a02-8208-69e2ba4d1df7.png",
      linkedin: "https://linkedin.com/in/akankshajha"
    }
  ];

  const secondRowMentors = [
    {
      name: "Vikranth Udandarao",
      image: "/lovable-uploads/c4bddbcb-915a-4963-908e-f9b81edb6da4.png",
      linkedin: "https://linkedin.com/in/vikranthudandarao"
    },
    {
      name: "Rudra Pratap Dash",
      image: "/lovable-uploads/fada214c-d4cb-47ae-836b-3b0102f35873.png",
      linkedin: "https://linkedin.com/in/rudrapratapdash"
    },
    {
      name: "Aishvi Guleria",
      image: "/lovable-uploads/77791c28-cf22-465b-a219-8f7358dfd247.png",
      linkedin: "https://linkedin.com/in/aishviguleria"
    },
    {
      name: "Pratham Batra",
      image: "/lovable-uploads/8d7858a0-ce45-43a7-b23d-4448f0aee112.png",
      linkedin: "https://linkedin.com/in/prathambatra"
    }
  ];

  const thirdRowMentors = [
    {
      name: "Teeksha Harish",
      image: "/lovable-uploads/91627645-a1e4-402d-ba12-ea11087730de.png",
      linkedin: "https://linkedin.com/in/teekshaharish"
    },
    {
      name: "Dhruv Bakshi",
      image: "/lovable-uploads/949ff3d8-04db-452e-a07c-75d90323c739.png",
      linkedin: "https://linkedin.com/in/dhruvbakshi"
    },
    {
      name: "Suhani Nagpal",
      image: "/lovable-uploads/82f58811-5e89-41b2-bf12-a744f2408375.png",
      linkedin: "https://linkedin.com/in/suhaninagpal"
    },
    {
      name: "Tanmay Arora",
      image: "/lovable-uploads/ca554fb5-7181-43ac-a403-417e74f9540c.png",
      linkedin: "https://linkedin.com/in/tanmayarora"
    }
  ];

  const fourthRowMentors = [
    {
      name: "Aditya Girdhar",
      image: "/lovable-uploads/a12c5f43-5ddc-46d8-8f20-877afa3c2a11.png",
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
