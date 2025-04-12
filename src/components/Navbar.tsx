
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-google-darkblue text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://developers.google.com/static/profile/badges/events/studies/gdg/images/gdg-logo.svg" 
                alt="Google Developer Groups Logo" 
                className="h-10" 
              />
              <span className="text-lg font-bold">GDG IGDTUW</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-white hover:text-[#4ecbff] transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-[#4ecbff] transition-colors">About</Link>
            <Link to="/devcation25" className="text-white hover:text-[#4ecbff] transition-colors">Devcation'25</Link>
            <Link to="/timeline" className="text-white hover:text-[#4ecbff] transition-colors">Timeline</Link>
            <Link to="/events" className="text-white hover:text-[#4ecbff] transition-colors">Events</Link>
            <div className="group relative">
              <button className="text-white hover:text-[#4ecbff] transition-colors flex items-center">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
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
            <Link to="/contact" className="text-white hover:text-[#4ecbff] transition-colors">Contact</Link>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/devcation25" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Devcation'25</Link>
              <Link to="/timeline" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Timeline</Link>
              <Link to="/events" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/tracks" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Tracks</Link>
              <Link to="/judges" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Judges</Link>
              <Link to="/mentors" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Mentors</Link>
              <Link to="/prizes" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Prizes</Link>
              <Link to="/sponsors" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
              <Link to="/faq" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" className="text-white hover:text-[#4ecbff]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
