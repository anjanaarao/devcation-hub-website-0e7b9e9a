
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-google-blue">Get In Touch</h3>
            
            <div className="flex items-start mb-6">
              <div className="bg-google-blue/20 p-3 rounded-full mr-4">
                <MapPin className="text-google-blue" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-600">
                  Indira Gandhi Delhi Technical University for Women,<br />
                  Kashmere Gate, Delhi - 110006
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-google-red/20 p-3 rounded-full mr-4">
                <Phone className="text-google-red" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-google-yellow/20 p-3 rounded-full mr-4">
                <Mail className="text-google-yellow" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-600">gdgigdtuw@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-google-green">Send A Message</h3>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-google-blue h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-google-green hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md flex items-center transition-colors"
              >
                Send Message
                <Send className="ml-2" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
