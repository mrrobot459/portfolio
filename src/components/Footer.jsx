import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101820] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-3">
              {portfolioData.personalInfo.fullName.split(' ')[0]} <span className="text-[#FEE715]">{portfolioData.personalInfo.fullName.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-white/70 text-sm">
              &copy; {currentYear} {portfolioData.personalInfo.fullName}. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-white w-full md:w-auto">
            {/* Navigation */}
            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-[#A7BEAE]">Home</a></li>
                <li><a href="#education" className="hover:text-[#A7BEAE]">Education</a></li>
                <li><a href="#projects" className="hover:text-[#A7BEAE]">Projects</a></li>
              </ul>
            </div>

            {/* More */}
            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">More</h4>
              <ul className="space-y-2">
                <li><a href="#skills" className="hover:text-[#A7BEAE]">Skills</a></li>
                <li><a href="#skills" className="hover:text-[#A7BEAE]">about</a></li>
                <li><a href="#contact" className="hover:text-[#A7BEAE]">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="hover:bg-[#A7BEAE]/10 p-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#FEE715]">
              <h4 className="font-semibold text-[#FEE715] mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={portfolioData.personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7BEAE]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7BEAE]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A7BEAE]"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm flex items-center">
            Built with <Heart size={16} className="mx-1 text-red-500" /> by {portfolioData.personalInfo.fullName}
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#101820] border border-[#FEE715] text-[#FEE715] hover:bg-[#A7BEAE]/10 hover:shadow-[0_0_15px_#FEE715] rounded-full transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
