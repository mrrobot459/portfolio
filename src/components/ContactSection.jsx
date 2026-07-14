import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#101820] text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contact <span className="text-[#FEE715]">Me</span>
        </h2>

        <p className="text-lg text-[#A7BEAE] mb-10">
          {portfolioData.contactSection.contactDescription}
        </p>

        {/* Contact items */}
        <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto">
          {[
            { icon: <Mail size={24} />, title: 'Email', text: portfolioData.contactSection.email, href: `mailto:${portfolioData.contactSection.email}` },
            { icon: <Phone size={24} />, title: 'Phone', text: portfolioData.contactSection.phone, href: `tel:${portfolioData.contactSection.phone}` },
            { icon: <MapPin size={24} />, title: 'Location', text: portfolioData.contactSection.location },
          ].map(({ icon, title, text, href }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-4 rounded-lg bg-[#1c1f26] hover:shadow-lg hover:shadow-[#FEE715]/50 hover:scale-[1.01] transition duration-300"
            >
              <div className="p-3 bg-[#FEE715] text-[#101820] rounded-full shrink-0">{icon}</div>
              <div className="text-center sm:text-left w-full">
                <h4 className="font-semibold">{title}</h4>
                {href ? (
                  <a href={href} className="hover:text-[#A7BEAE] transition block break-all">
                    {text}
                  </a>
                ) : (
                  <p>{text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-4">
            {[
              { href: portfolioData.contactSection.linkedinUrl, icon: <Linkedin size={24} /> },
              { href: portfolioData.contactSection.githubUrl, icon: <Github size={24} /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-[#101820] rounded-full hover:bg-[#A7BEAE] hover:shadow-[#FEE715]/50 hover:shadow-lg transition duration-300 transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
