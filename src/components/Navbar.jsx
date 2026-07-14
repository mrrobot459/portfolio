import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  const resumeLink = portfolioData.personalInfo.resumeUrl;

  const handleResumeClick = (event) => {
    if (event) {
      event.preventDefault();
    }

    // open new tab
    window.open(resumeLink, '_blank', 'noopener,noreferrer');

    // also trigger download (for browsers that support it)
    const anchor = document.createElement('a');
    anchor.href = resumeLink;
    anchor.download = 'Ravi_Ram_Resume.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#101820] shadow-md py-3' : 'bg-[#101820] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-xl font-semibold text-white">
            {portfolioData.personalInfo.fullName.split(' ')[0]} <span className="text-[#FEE715] font-bold">{portfolioData.personalInfo.fullName.split(' ').slice(1).join(' ')}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-[#A7BEAE] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeLink}
              onClick={handleResumeClick}
              className="text-[#101820] font-medium bg-[#FEE715] px-3 py-1 rounded-md hover:bg-[#A7BEAE] transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#A7BEAE] focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-[#101820] rounded-md shadow px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white font-medium hover:text-[#A7BEAE]"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeLink}
              onClick={(event) => {
                setIsMenuOpen(false);
                handleResumeClick(event);
              }}
              className="block text-[#101820] font-medium bg-[#FEE715] px-3 py-2 rounded-md text-center hover:bg-[#A7BEAE]"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
