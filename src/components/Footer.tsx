
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-google-darkblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#4ecbff]">Devcation'25</h3>
            <p className="text-gray-300">A flagship hackathon organized by GDG IGDTUW, bringing together the brightest minds to innovate and create.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#4ecbff]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/devcation25" className="text-gray-300 hover:text-white">Devcation'25</Link></li>
              <li><Link to="/timeline" className="text-gray-300 hover:text-white">Timeline</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#4ecbff]">More</h3>
            <ul className="space-y-2">
              <li><Link to="/tracks" className="text-gray-300 hover:text-white">Tracks</Link></li>
              <li><Link to="/judges" className="text-gray-300 hover:text-white">Judges</Link></li>
              <li><Link to="/mentors" className="text-gray-300 hover:text-white">Mentors</Link></li>
              <li><Link to="/prizes" className="text-gray-300 hover:text-white">Prizes</Link></li>
              <li><Link to="/sponsors" className="text-gray-300 hover:text-white">Sponsors</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#4ecbff]">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Github size={24} />
              </a>
            </div>
            <div className="mt-4">
              <a href="#" className="bg-[#4ecbff] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition-colors">Join Discord</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Google Developer Groups IGDTUW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
