import React from "react";
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
import {
  SiMongodb,
  SiTailwindcss,
  SiNpm,
  SiVite,
  SiReactrouter,
  SiExpress,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const allSkills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    glow: "#f97316",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    glow: "#3b82f6",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-yellow-400" />,
    glow: "#facc15",
  },
  {
    name: "React",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    glow: "#06b6d4",
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="text-4xl text-red-400" />,
    glow: "#f87171",
  },
  {
    name: "Context API",
    icon: <FaReact className="text-4xl text-cyan-300" />,
    glow: "#67e8f9",
  },
  {
    name: "Redux Toolkit",
    icon: <FaReact className="text-4xl text-purple-400" />,
    glow: "#c084fc",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-sky-400" />,
    glow: "#38bdf8",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-4xl text-purple-500" />,
    glow: "#a855f7",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    glow: "#22c55e",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-4xl text-gray-300" />,
    glow: "#9ca3af",
  },
  {
    name: "REST API",
    icon: <FaNodeJs className="text-4xl text-green-400" />,
    glow: "#4ade80",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl text-green-600" />,
    glow: "#16a34a",
  },
  {
    name: "SQL",
    icon: <GrMysql className="text-4xl text-indigo-400" />,
    glow: "#6366f1",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-orange-600" />,
    glow: "#ea580c",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-gray-300" />,
    glow: "#9ca3af",
  },
  {
    name: "npm",
    icon: <SiNpm className="text-4xl text-red-500" />,
    glow: "#ef4444",
  },
  {
    name: "Postman",
    icon: <FaNodeJs className="text-4xl text-orange-400" />,
    glow: "#fb923c",
  },
  {
    name: "Nodemon",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    glow: "#22c55e",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-4xl text-purple-400" />,
    glow: "#a855f7",
  },
  {
    name: "VS Code",
    icon: <BiLogoVisualStudio className="text-4xl text-blue-400" />,
    glow: "#3b82f6",
  },
];

const mid = Math.ceil(allSkills.length / 2);
const row1Skills = allSkills.slice(0, mid);
const row2Skills = allSkills.slice(mid);

const SkillCard = ({ skill }) => (
  <div
    className="flex flex-col items-center justify-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 mx-3 min-w-[110px] sm:min-w-[130px] select-none transition-all duration-300 cursor-default"
    style={{ "--glow": skill.glow }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 0 20px ${skill.glow}66`;
      e.currentTarget.style.borderColor = `${skill.glow}88`;
      e.currentTarget.style.transform = "scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    <div className="flex items-center justify-center w-10 h-10">
      {skill.icon}
    </div>
    <span className="text-xs sm:text-sm font-medium text-gray-200 text-center whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

const MarqueeRow = ({ skills, direction }) => {
  const doubled = [...skills, ...skills, ...skills];
  const animClass =
    direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl";

  return (
    <div className="relative overflow-hidden w-full py-2">
      {/* Left blur */}
      <div
        className="absolute left-0 top-0 h-full z-10 pointer-events-none"
        style={{
          width: "120px",
          background:
            "linear-gradient(to right, #111827 0%, #111827cc 40%, transparent 100%)",
        }}
      />
      {/* Right blur */}
      <div
        className="absolute right-0 top-0 h-full z-10 pointer-events-none"
        style={{
          width: "120px",
          background:
            "linear-gradient(to left, #111827 0%, #111827cc 40%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <div
        className={`flex w-max ${animClass}`}
        style={{ willChange: "transform" }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-ltr {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 30s linear infinite;
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }
        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: running;
        }
      `}</style>

      <section className="bg-gray-900 text-white py-20" id="skills">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          {/* Techy Skills Heading */}
          <div className="mb-16 text-center font-mono">
            {/* // label */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#64ffda]/50 text-xs tracking-widest">
                //
              </span>
              <span className="text-[#64ffda]/70 text-[11px] tracking-[3px] uppercase">
                skills.import()
              </span>
              <span className="text-[#64ffda]/50 text-xs tracking-widest">
                //
              </span>
            </div>

            {/* Main title */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
              <span className="text-[#64ffda]">&lt;</span>
              Skills
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
              // technologies I use to bring ideas to life
            </p>
          </div>

          {/* Marquee rows */}
          <div className="flex flex-col gap-6">
            <MarqueeRow skills={row1Skills} direction="rtl" />
            <MarqueeRow skills={row2Skills} direction="ltr" />
          </div>
        </div>
      </section>
    </>
  );
}
