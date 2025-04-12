
import React from 'react';
import { Code, Lightbulb, Users, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">About GDG IGDTUW</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
          <p className="mb-6">
            Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. 
            We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. 
            where students from across the globe get to showcase their knowledge and develop their skillset.
          </p>
          <p>
            We have helped more than 7000+ university students to expand their technical knowledge and skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-google-blue/20 flex items-center justify-center mx-auto mb-6">
              <Code className="text-google-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Technical Workshops</h3>
            <p className="text-gray-600 text-center">
              Hands-on sessions and workshops on cutting-edge technologies and development practices.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-google-red/20 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-google-red" size={32} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Innovation Hub</h3>
            <p className="text-gray-600 text-center">
              A platform for students to innovate, ideate and transform their ideas into impactful solutions.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-google-yellow/20 flex items-center justify-center mx-auto mb-6">
              <Users className="text-google-yellow" size={32} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Community Building</h3>
            <p className="text-gray-600 text-center">
              Fostering a supportive tech community where students can network and collaborate.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-google-green/20 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-google-green" size={32} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Mentorship Programs</h3>
            <p className="text-gray-600 text-center">
              Connecting students with industry professionals to guide their technical and career growth.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow md:col-span-2">
            <div className="w-16 h-16 rounded-full bg-google-blue/20 flex items-center justify-center mx-auto mb-6">
              <Award className="text-google-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Hackathons & Contests</h3>
            <p className="text-gray-600 text-center">
              Competitive events where students can showcase their skills and win exciting prizes while solving real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
