import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImg from "../assets/Sabbir_Profile.png";
import {
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaGithub,
} from "react-icons/fa";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "React Developer",
        "Full-Stack Engineer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
   <section className="bg-gray-900 text-white overflow-hidden relative" id="home">
  {/* Background Decoration - Glow Effect */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-[#64ffda]/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
    {/* Left Content */}
    <div className="animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-[2px] w-8 bg-[#64ffda]"></div>
        <p className="text-[#64ffda] font-mono text-lg md:text-xl tracking-widest">
          HELLO, I AM
        </p>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-6xl font-black mt-2 tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        Sk Sabbir Ali
      </h1>

      {/* Typing Effect Enhanced */}
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mt-4 min-h-[40px]">
        <span ref={typedRef}></span>
      </h2>

      <div className="w-28 h-1.5 bg-gradient-to-r from-[#64ffda] to-transparent my-8 rounded-full"></div>

      <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed backdrop-blur-sm">
        A passionate <span className="text-white font-medium">MERN Stack Developer</span> who loves building responsive,
        modern, and user-friendly web applications. I specialize in <span className="text-[#64ffda]">React, Node.js, and MongoDB</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-5 mt-10">
        <a
          href="#contact"
          className="relative group overflow-hidden bg-[#64ffda] text-[#0a192f] px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.6)] transition-all duration-300"
        >
          <span className="relative z-10">Hire Me</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></div>
        </a>
        <a
          href="/sk-sabbir-ali-latest-fs.pdf"
          download
          className="border-2 border-[#64ffda]/50 text-[#64ffda] px-8 py-4 rounded-xl font-bold hover:bg-[#64ffda]/10 hover:border-[#64ffda] transition-all duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Updated Social Links with Hover Glow */}
      <div className="flex space-x-5 pt-12">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sk-sabbir-ali/", color: "hover:bg-blue-600" },
          { icon: <FaEnvelope />, link: "mailto:sksabbirali99@gmail.com", color: "hover:bg-red-500" },
          { icon: <FaGithub />, link: "https://github.com/sabbirShaikh", color: "hover:bg-gray-700" }
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white ${item.color} hover:-translate-y-2 transition-all duration-300 shadow-lg`}
          >
            <span className="text-xl">{item.icon}</span>
          </a>
        ))}
      </div>
    </div>

    {/* Right Content (Refined Profile Image Section) */}
<div className="flex justify-center md:justify-end relative group">
  {/* Outer Decorative Tech Ring - Rotating slowly */}
  <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-30">
    <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] border-2 border-dashed border-[#64ffda]/40 rounded-full"></div>
  </div>

  {/* Secondary Tech Accents (Corner Brackets) */}
  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
     <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#64ffda]"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#64ffda]"></div>
     </div>
  </div>
  
  <div className="relative p-6">
    {/* Enhanced Glow/Aura */}
    <div className="absolute inset-0 bg-[#64ffda]/10 blur-[80px] rounded-full animate-pulse"></div>
    
    {/* The Main Profile Container */}
    <div className="relative z-10 w-72 h-72 md:w-[400px] md:h-[400px]">
      {/* Background Layer (Glassmorphism ring) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#64ffda] to-transparent opacity-20 animate-spin-slow"></div>
      
      {/* Image with Professional Border Stack */}
      <img
        src={profileImg}
        alt="Sk Sabbir Ali"
        className="w-full h-full object-cover rounded-full shadow-2xl 
                   border-[6px] border-gray-900 
                   ring-4 ring-gray-800/50 
                   relative z-10 animate-float transition-transform duration-500 group-hover:scale-[1.02]"
      />
      
      {/* Small "Available for Work" badge overlapping the image */}
      <div className="absolute bottom-6 right-6 z-20 bg-gray-900/90 backdrop-blur-md border border-[#64ffda]/30 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl animate-bounce">
        <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-ping"></div>
        <span className="text-[10px] md:text-xs font-mono font-bold text-[#64ffda] tracking-widest uppercase">
          Active
        </span>
      </div>
    </div>
  </div>
</div>
  </div>
</section>
  );
}
