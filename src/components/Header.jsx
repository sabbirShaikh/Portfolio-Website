import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Education", "Skills", "Projects", "Contact"];

  // Smooth Scroll Handler
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false); // Close mobile menu if open
      const headerOffset = 100; // Space for the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* 1. Add this to your Global CSS or a <style> tag */}
      <style>{`
        section {
          scroll-margin-top: 100px; /* Backup for standard anchor links */
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
        <div className={`max-w-6xl mx-auto px-4 mt-4 transition-all duration-500 ${scrolled ? 'md:max-w-4xl' : 'md:max-w-7xl'}`}>
          <nav className={`flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-500
            ${scrolled ? "bg-gray-900/60 backdrop-blur-xl border-white/10 shadow-2xl" : "bg-transparent border-transparent"}`}>
            
            {/* Logo */}
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center group font-mono">
              <span className="text-[#64ffda] font-bold text-xl mr-1">{"<"}</span>
              <span className="text-white font-bold text-lg tracking-tight group-hover:tracking-widest transition-all duration-300">SABBIR</span>
              <span className="text-[#64ffda] font-bold text-xl ml-1">{"/>"}</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#64ffda] hover:bg-white/5 rounded-full transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/sabbirShaikh" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-[#64ffda] hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] text-[#0a192f] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5" onClick={() => setIsOpen(!isOpen)}>
              <div className={`h-[2px] w-6 bg-[#64ffda] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`h-[2px] w-6 bg-[#64ffda] transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`h-[2px] w-6 bg-[#64ffda] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0a192f] transition-all duration-500 md:hidden z-[-1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-4xl font-bold text-white hover:text-[#64ffda] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;