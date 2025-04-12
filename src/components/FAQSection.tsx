
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can contribute?",
      answer: "Students from any college or university can participate. We welcome participants from all backgrounds, whether you're a beginner or an experienced developer."
    },
    {
      question: "Where can we reach out in case of queries?",
      answer: "You can reach out to us through our Discord channel, email at gdgigdtuw@gmail.com, or through our social media handles. Our team will be happy to assist you."
    },
    {
      question: "Do I need to have coding experience to participate?",
      answer: "While having some coding experience is helpful, it's not mandatory. We welcome participants with diverse skill sets. You can contribute to design, documentation, or business aspects of a project as well."
    },
    {
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon ends, all submissions will be evaluated by our panel of judges. Winners will be announced during the closing ceremony, and all participants will receive certificates and other benefits mentioned in the prizes section."
    },
    {
      question: "How can I stay updated on hackathon announcements and events?",
      answer: "Join our Discord server and follow our social media accounts for the latest updates. We'll also send important announcements via email to registered participants."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-google-darkblue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#4ecbff] mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <button
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-semibold text-white">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="text-[#4ecbff]" /> : 
                  <ChevronDown className="text-[#4ecbff]" />
                }
              </button>
              
              {openIndex === index && (
                <div className="p-4 pt-0 bg-white/5 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a 
            href="https://discord.gg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
          >
            <img 
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_white_RGB.png" 
              alt="Discord Logo" 
              className="h-6 mr-2" 
            />
            Join Discord
          </a>
          
          <a 
            href="https://whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp Logo" 
              className="h-6 mr-2" 
            />
            Join WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
