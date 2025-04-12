
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img 
              src="https://developers.google.com/static/profile/badges/events/studies/gdg/images/gdg-logo.svg" 
              alt="Google Developer Groups Logo" 
              className="h-12 mr-2" 
            />
            <span className="text-sm text-gray-600">Google Developer Groups on Campus<br/><span className="text-xs">Indira Gandhi Delhi Technical University for Women</span></span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-google-blue font-medium">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-google-blue font-medium">About</Link>
          <Link to="/devcation25" className="text-gray-800 hover:text-google-blue font-medium">Devcation'25</Link>
          <Link to="/timeline" className="text-gray-800 hover:text-google-blue font-medium">Timeline</Link>
          <Link to="/events" className="text-gray-800 hover:text-google-blue font-medium">Events</Link>
          <div className="group relative">
            <Link to="#" className="text-gray-800 hover:text-google-blue font-medium flex items-center">
              More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div className="py-1">
                <Link to="/tracks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tracks</Link>
                <Link to="/judges" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Judges</Link>
                <Link to="/mentors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mentors</Link>
                <Link to="/prizes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prizes</Link>
                <Link to="/sponsors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sponsors</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className="text-gray-800 hover:text-google-blue font-medium">Contact</Link>
        </div>
        
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <img 
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
            alt="Discord" 
            className="h-8" 
          />
        </a>
        
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
