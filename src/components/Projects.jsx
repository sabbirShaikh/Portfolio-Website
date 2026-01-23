import React from "react";
import onlineShoppingImg from "../assets/react.svg"; // save actual screenshot
import pronoteImg from "../assets/Pronote-app.png"; 
import movieAppImg from "../assets/movie-app.png";
import shoppingApiImg from "../assets/store-app.png";

export default function Projects() {
  const projects = [
  {
    name: "Online Shopping Website",
    description:
      "An e-commerce web application with product listing, add-to-cart functionality, and basic checkout flow.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    github: "https://github.com/yourusername/online-shopping",
    live: "https://online-shopping-demo.netlify.app",
    image: onlineShoppingImg,
  },
  {
    name: "Pronote / Note Management System",
    description:
      "A note management application to create, edit, delete, and organize notes with a clean user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sabbirShaikh/ProNotes-note-management.git",
    live: "https://pronote-notesapp.netlify.app/",
    image: pronoteImg,
  },
  {
    name: "CinemaVault - Movie Browsing App",
    description:
      "A movie browsing app that fetches data from a public API and displays movies, ratings, and details with search support.",
    tech: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/sabbirShaikh/Cinema-Vault-frondend",
    live: "https://cinema-vaults.netlify.app/",
    image: movieAppImg,
  },
  {
    name: "Store - Shopping App Using API",
    description:
      "A shopping application that fetches products from an external API and supports product listing and cart management.",
    tech: ["React", "JavaScript", "REST API", "Bootstrap"],
    github: "https://github.com/sabbirShaikh/Store-Shopping-Website---using-dummy-apis",
    live: "https://store-onlineshopping.netlify.app/",
    image: shoppingApiImg,
  },
];


  const techColors = {
    React: "bg-blue-500/30 text-blue-400",
    "Node.js": "bg-green-500/30 text-green-400",
    Express: "bg-gray-500/30 text-gray-300",
    MongoDB: "bg-green-700/30 text-green-200",
    TailwindCSS: "bg-teal-500/30 text-teal-300",
    Bootstrap: "bg-purple-500/30 text-purple-300",
    "Material-UI": "bg-indigo-500/30 text-indigo-300",
    "Socket.io": "bg-orange-500/30 text-orange-300",
  };

  return (
    <section className="bg-gray-900 text-white py-15 pt-15 pt-0" id="projects">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* --- THE SIGNATURE BALANCED HEADING (Like Education) --- */}
    <div className="mb-20 text-center">
      <div className="inline-flex items-center justify-center gap-4 w-full">
        <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-700 to-[#64ffda]"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-400 to-[#64ffda] bg-clip-text text-transparent leading-tight px-4">
          My Projects
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-700 to-[#64ffda]"></div>
      </div>
      </div>
      
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        A curated selection of my technical work and full-stack applications.
      </p>
    </div>

    {/* Balanced 2-Column Grid for Professional Look */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#64ffda]/50 transition-all duration-500 shadow-xl"
        >
          {/* Top: Image Section */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Bottom: Content Section */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                {project.name}
              </h3>
              <span className="text-[10px] font-mono text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded border border-[#64ffda]/20 uppercase tracking-widest">
                Latest
              </span>
            </div>

            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack - Clean Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-900/50 text-gray-300 text-[11px] font-mono border border-gray-700 rounded-md group-hover:border-[#64ffda]/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Balanced CTA Buttons */}
            <div className="flex items-center gap-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#64ffda] text-[#0a192f] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white font-semibold transition-colors group/link"
              >
                <span>GitHub</span>
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
