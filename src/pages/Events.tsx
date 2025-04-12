
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events = () => {
  const events = [
    {
      title: "Hackathon",
      date: "April 8-12, 2025",
      description: "The main hackathon event where participants build projects based on the provided tracks.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Tech Talks",
      date: "April 5-7, 2025",
      description: "Industry experts share their knowledge and experience through informative sessions.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Workshops",
      date: "April 6-7, 2025",
      description: "Hands-on sessions on various technologies and tools to help participants prepare for the hackathon.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Networking Session",
      date: "April 13, 2025",
      description: "Connect with industry professionals, sponsors, and other participants to expand your network.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 bg-google-darkblue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="section-title mb-4">Events</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-google-blue mb-2">{event.title}</h3>
                    <p className="text-gray-500 mb-4">{event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
