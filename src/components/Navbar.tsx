
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-google-darkblue/95 backdrop-blur-md' : 'bg-google-darkblue'} text-white sticky top-0 z-50 shadow-lg transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fe4157d9-cc0a-4664-b68f-de38388a6874.png" 
                alt="Google Developer Groups Logo" 
                className="h-10" 
              />
              <span className="text-lg font-bold">GDG IGDTUW</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/devcation25" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              Devcation'25
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/timeline" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              Timeline
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/events" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="group relative">
              <button className="text-white hover:text-[#4ecbff] transition-colors flex items-center relative group">
                More
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-xl border border-blue-900/30 hidden group-hover:block z-50 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-1 rounded-md overflow-hidden">
                  <Link to="/tracks" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Tracks</Link>
                  <Link to="/judges" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Judges</Link>
                  <Link to="/mentors" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Mentors</Link>
                  <Link to="/prizes" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Prizes</Link>
                  <Link to="/sponsors" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Sponsors</Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">FAQ</Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-white hover:text-[#4ecbff] transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecbff] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/devcation25" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Devcation'25</Link>
              <Link to="/timeline" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Timeline</Link>
              <Link to="/events" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Events</Link>
              <Link to="/tracks" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Tracks</Link>
              <Link to="/judges" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Judges</Link>
              <Link to="/mentors" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Mentors</Link>
              <Link to="/prizes" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Prizes</Link>
              <Link to="/sponsors" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
              <Link to="/faq" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" className="text-white hover:text-[#4ecbff] transition-colors px-2 py-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
