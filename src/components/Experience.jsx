import React, { useState } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: "Software Developer",
      company: "TableSprint",
      companyUrl: "https://www.tablesprint.com", // Placeholder or direct URL if known
      period: "January 2026 - Present",
      location: "On-site",
      skills: ["React", "Node.js", "Express.js", "TypeScript", "PostgreSQL"],
      points: [
        "Architecting and developing full-stack web applications using React, Node.js, and TypeScript to build responsive, robust user interfaces and scalable server architectures.",
        "Designing relational database schemas and writing optimized queries using PostgreSQL to ensure robust, high-performance data persistence and data integrity.",
        "Contributing to the development of TableSprint, a state-of-the-art vibe coding platform that empowers users to build and deploy web applications dynamically.",
        "Implementing secure RESTful APIs, type-safe middlewares, and integrating third-party services to enhance platform features and reliability."
      ]
    },
    {
      role: "MERN Full-stack Intern",
      company: "JSpiders",
      companyUrl: "https://www.jspiders.com",
      period: "March 2025 - December 2025",
      location: "Training & Development Center",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Git"],
      points: [
        "Completed an intensive full-stack internship focusing on building applications with MongoDB, Express.js, React, and Node.js.",
        "Developed dynamic frontend components using React and styled them with modern, responsive utility frameworks to ensure excellent user experience.",
        "Created robust server-side logic and RESTful APIs using Express.js and Node.js, integrated with MongoDB for efficient data persistence.",
        "Collaborated with training leads and fellow interns on project architecture, peer code reviews, and version control using Git."
      ]
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 border-t border-gray-800/50" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- Techy Experience Heading --- */}
        <div className="mb-16 text-center font-mono">
          {/* // experience.load() label */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#64ffda]/50 text-xs tracking-widest">
              //
            </span>
            <span className="text-[#64ffda]/70 text-[11px] tracking-[3px] uppercase">
              experience.load()
            </span>
            <span className="text-[#64ffda]/50 text-xs tracking-widest">
              //
            </span>
          </div>

          {/* Main title with JSX-style brackets */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
            <span className="text-[#64ffda]">&lt;</span>
            Experience
            <span className="text-[#64ffda]">/&gt;</span>
            <span
              className="inline-block w-[3px] h-[0.8em] bg-[#64ffda] ml-2 align-middle rounded-sm"
              style={{ animation: "blink 1.1s step-end infinite" }}
            />
          </h2>

          {/* Scanline underline */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#64ffda66] to-transparent rounded" />
            <span className="text-[#64ffda]/40 text-[10px] tracking-[6px] font-mono">
              ···
            </span>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent via-[#64ffda66] to-transparent rounded" />
          </div>

          {/* Subtitle comment */}
          <p className="mt-3 text-gray-600 text-[11px] tracking-[2px] uppercase font-mono">
            // professional journey & internship details
          </p>
        </div>

        {/* Tabbed Layout Container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-12 min-h-[380px]">
          
          {/* Left Column: Tabs List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-700/50 min-w-[160px] scrollbar-none">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-5 text-left text-sm font-mono tracking-wide whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2
                  ${
                    activeTab === idx
                      ? "text-[#64ffda] bg-[#64ffda]/5 border-[#64ffda]"
                      : "text-gray-400 border-transparent hover:text-white hover:bg-gray-800/30"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content */}
          <div className="flex-1 transition-all duration-500 animate-fadeIn">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm hover:border-[#64ffda]/30 transition-all duration-300">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center gap-1.5">
                    <span>{experiences[activeTab].role}</span>
                    <span className="text-[#64ffda] font-semibold">
                      @ {experiences[activeTab].company}
                    </span>
                  </h3>
                  
                  {/* Location & Calendar */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#64ffda]/80" />
                      {experiences[activeTab].period}
                    </span>
                    <span className="hidden sm:inline text-gray-600">•</span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} className="text-[#64ffda]/80" />
                      {experiences[activeTab].location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {experiences[activeTab].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-gray-900/60 text-gray-300 text-[11px] font-mono border border-gray-700/80 rounded hover:border-[#64ffda]/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-700/50 mb-6" />

              {/* Job Description Points */}
              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                    <span className="text-[#64ffda] mt-1 shrink-0">
                      <ChevronRight size={16} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
