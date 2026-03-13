import React from "react";
import onlineShoppingImg from "../assets/react.svg";
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
      github: "https://github.com/sabbirShaikh/Hackathon-assignment",
      live: "https://ecommerce-bysabbir.netlify.app/",
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
      github:
        "https://github.com/sabbirShaikh/Store-Shopping-Website---using-dummy-apis",
      live: "https://store-onlineshopping.netlify.app/",
      image: shoppingApiImg,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-15 pt-0" id="projects">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-20 text-center font-mono">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#64ffda]/50 text-xs tracking-widest">//</span>
            <span className="text-[#64ffda]/70 text-[11px] tracking-[3px] uppercase">projects.fetch()</span>
            <span className="text-[#64ffda]/50 text-xs tracking-widest">//</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
            <span className="text-[#64ffda]">&lt;</span>
            Projects
            <span className="text-[#64ffda]">/&gt;</span>
            <span
              className="inline-block w-[3px] h-[0.8em] bg-[#64ffda] ml-2 align-middle rounded-sm"
              style={{ animation: "blink 1.1s step-end infinite" }}
            />
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#64ffda66] to-transparent rounded" />
            <span className="text-[#64ffda]/40 text-[10px] tracking-[6px] font-mono">···</span>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent via-[#64ffda66] to-transparent rounded" />
          </div>
          <p className="mt-3 text-gray-600 text-[11px] tracking-[2px] uppercase font-mono">
            // curated full-stack work &amp; technical builds
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#64ffda]/40 transition-all duration-500 shadow-lg flex flex-col"
            >
              {/* Image — fixed height, no aspect-video */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

                {/* Badge overlaid on image */}
                <span className="absolute top-3 right-3 text-[10px] font-mono text-[#64ffda] bg-gray-900/80 px-2 py-1 rounded border border-[#64ffda]/20 uppercase tracking-widest backdrop-blur-sm">
                  Latest
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#64ffda] transition-colors mb-2 leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-gray-900/60 text-gray-300 text-[11px] font-mono border border-gray-700 rounded group-hover:border-[#64ffda]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700/50 mb-4" />

                {/* CTA Buttons */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#64ffda] text-[#0a192f] text-sm font-bold rounded-lg hover:shadow-[0_0_18px_rgba(100,255,218,0.35)] transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-semibold transition-colors group/link"
                  >
                    <span>GitHub</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
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