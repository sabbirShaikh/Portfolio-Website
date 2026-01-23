import React, { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNpm, SiVite, SiReactrouter, SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

// Helper component for the Skill Card to keep the main return clean
const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 20).toFixed(2);
    const rotateY = ((centerX - x) / 20).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`bg-gray-800 rounded-xl p-6 shadow-xl transition duration-300 ${skill.glow} flex flex-col items-center justify-center`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div className="flex justify-center mb-4">{skill.icon}</div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    </div>
  );
};

export default function Skills() {
  // Organized skills data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" />, glow: "hover:shadow-[0_0_25px_#f97316]" },
        { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-500" />, glow: "hover:shadow-[0_0_25px_#3b82f6]" },
        { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" />, glow: "hover:shadow-[0_0_25px_#facc15]" },
        { name: "React", icon: <FaReact className="text-5xl text-cyan-400" />, glow: "hover:shadow-[0_0_25px_#06b6d4]" },
        { name: "React Router", icon: <SiReactrouter className="text-5xl text-cyan-400" />, glow: "hover:shadow-[0_0_25px_#06b6d4]" },
        {name:"Context API", icon:<FaReact className="text-5xl text-cyan-400" />, glow: "hover:shadow-[0_0_25px_#06b6d4]"},
        {name:"Redux-Toolkit", icon:<FaReact className="text-5xl text-cyan-400" />, glow: "hover:shadow-[0_0_25px_#06b6d4]"},
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-sky-400" />, glow: "hover:shadow-[0_0_25px_#38bdf8]" },
        { name: "Bootstrap", icon: <FaBootstrap className="text-5xl text-purple-500" />, glow: "hover:shadow-[0_0_25px_#a855f7]" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" />, glow: "hover:shadow-[0_0_25px_#22c55e]" },
        { name: "Express.js", icon: <SiExpress className="text-5xl text-green-500" />, glow: "hover:shadow-[0_0_25px_#22c55e]" },
        {name:"REST API", icon:<FaNodeJs className="text-5xl text-green-500" />, glow: "hover:shadow-[0_0_25px_#22c55e]"},
        { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" />, glow: "hover:shadow-[0_0_25px_#16a34a]" },
        { name: "SQL", icon: <GrMysql className="text-5xl text-indigo-400" />, glow: "hover:shadow-[0_0_25px_#6366f1]" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600" />, glow: "hover:shadow-[0_0_25px_#f97316]" },
        { name: "GitHub", icon: <FaGithub className="text-5xl text-gray-300" />, glow: "hover:shadow-[0_0_25px_#9ca3af]" },
        { name: "npm", icon: <SiNpm className="text-5xl text-red-500" />, glow: "hover:shadow-[0_0_25px_#ef4444]" },
        {name:"Postman", icon:<FaNodeJs className="text-5xl text-green-500" />, glow: "hover:shadow-[0_0_25px_#22c55e]"},
        {name:"Nodemon", icon:<FaNodeJs className="text-5xl text-green-500" />, glow: "hover:shadow-[0_0_25px_#22c55e]"},
        { name: "Vite", icon: <SiVite className="text-5xl text-purple-400" />, glow: "hover:shadow-[0_0_25px_#a855f7]" },
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-5xl text-blue-400" />, glow: "hover:shadow-[0_0_25px_#3b82f6]" },
      ],
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-15" id="skills">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Enhanced Centered Section Heading */}
    <div className="mb-20 text-center">
      <div className="inline-flex items-center justify-center gap-4 w-full">
        <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-700 to-[#64ffda]"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-400 to-[#64ffda] bg-clip-text text-transparent leading-tight px-4">
          My Skills
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-700 to-[#64ffda]"></div>
      </div>
      </div>
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        A comprehensive toolkit of technologies I use to bring digital ideas to life.
      </p>
    </div>

    {skillCategories.map((category, catIndex) => (
      <div key={catIndex} className="mb-20 group">
        {/* Modern Category Title */}
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-[#64ffda] tracking-wide">
            {category.title}
          </h3>
          <div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-gray-700 transition-colors duration-500"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {category.skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
  );
}