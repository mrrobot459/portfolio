import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const educationData = portfolioData.educationSection.map((item) => ({
  degree: item.degree,
  college: item.instituteName,
  location: 'India',
  duration: item.passingYear,
  description: item.description,
}));
const EducationSection = () => {
  return (
    <section id="education" className="bg-[#101820] text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-4">Education</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Academic milestones and certifications that showcase growth in full-stack development, systems thinking, and engineering best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <Motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 45px rgba(254,231,21,0.25)' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-[#FEE715]/30 bg-[#101820] p-6 backdrop-blur-xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-4 h-10 w-10 rounded-full bg-[#FEE715] flex items-center justify-center shadow-lg">
                <GraduationCap size={20} className="text-[#101820]" />
              </div>

              <div className="ml-12">
                <h3 className="text-2xl font-bold text-[#FEE715] mb-2">{item.degree}</h3>
                <p className="text-white/90 font-semibold">{item.college}</p>
                <p className="text-sm text-white/70 mb-4">{item.location} • {item.duration}</p>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;