
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-[90vh] bg-google-darkblue relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-google-blue/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-google-red/20 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-64 h-64 rounded-full bg-google-yellow/20 blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 rounded-full bg-google-green/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold text-white mb-6">
            <span className="text-google-blue">Dev</span>
            <span className="text-google-red">ca</span>
            <span className="text-google-yellow">ti</span>
            <span className="text-google-green">on</span>
            <span className="text-white">'25</span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 italic">
            "Where Innovation Meets Opportunity. Code Your Future with Us."
          </p>
          
          <div className="mb-12">
            <a 
              href="#" 
              className="bg-white text-google-blue hover:bg-gray-100 text-lg font-bold py-3 px-8 rounded-full inline-flex items-center transition-all transform hover:scale-105"
            >
              Register Now
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-4xl font-bold mb-2 text-google-blue">4.6/5+</div>
              <div className="text-lg">Hacker Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-4xl font-bold mb-2 text-google-red">300+</div>
              <div className="text-lg">Hacks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="text-4xl font-bold mb-2 text-google-yellow">25+</div>
              <div className="text-lg">Speakers and Mentors</div>
            </div>
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white max-w-3xl mx-auto">
            <div className="text-4xl font-bold mb-2 text-google-green">500+</div>
            <div className="text-lg">Hackers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
