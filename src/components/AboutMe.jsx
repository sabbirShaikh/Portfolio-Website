import React, { useEffect, useRef } from "react";
import { Code2, Database, Palette, Rocket, CheckCircle2 } from "lucide-react";
import courseImg from "../assets/course-img.png";

export default function AboutMe() {
  const courses = [
    { title: "MERN Full-Stack Development Course", year: "2025" },
    { title: "Master of Computer Applications (MCA)", year: "2024" },
    { title: "B.Sc in Mathematics", year: "2022" },
    { title: "Intermediate", year: "2019" },
    { title: "Matriculation", year: "2017" },
  ];

  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 🔹 Single place for course descriptions
  const getDescription = (title) => {
    switch (title) {
      case "MERN Full-Stack Development Course":
        return "completed an intensive program covering MongoDB, Express.js, React, and Node.js for full-stack web development.";
      case "Master of Computer Applications (MCA)":
        return "completed master's degree focusing on advanced computer science topics, software development, and system design.";   
      case "B.Sc in Mathematics":
        return "Completed bachelor's degree with a focus on advanced mathematical concepts and applications.";
      case "Intermediate":
        return "Completed higher secondary education with specialization in science subjects like Physics, Chemistry Mathematics and Biology.";
      case "Matriculation":
        return "Completed secondary education with a strong foundation in core subjects including Mathematics, Science, and English.";
      default:
        return "";
    }
  };

  return (
   <section className="bg-gray-900 text-white py-12" id="about">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* --- ENHANCED ABOUT ME HEADING --- */}
    <div className="mb-16 text-center">
      <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/10 text-[#64ffda] text-xs md:text-sm font-medium tracking-wider uppercase">
        My Story
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-700 to-[#64ffda]"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-400 to-[#64ffda] bg-clip-text text-transparent leading-tight px-4">
          About Me
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-700 to-[#64ffda]"></div>
      </div>
    </div>

    {/* About Me Top Content Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 mb-24 px-4 md:px-0">
      {/* Left Side: Content */}
      <div className="order-2 lg:order-1 text-left">
        <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
          Hi! I'm <span className="text-[#64ffda] font-semibold">Sk Sabbir Ali</span>, a full-stack web developer with a passion for crafting dynamic and responsive web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions.
        </p>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#64ffda]/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-[#64ffda] mb-2">
              <Code2 size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white text-sm md:text-base">Development</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-snug">Expert in React, Node.js, and modern JS patterns.</p>
          </div>

          <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#64ffda]/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-[#64ffda] mb-2">
              <Database size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white text-sm md:text-base">Databases</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-snug">Efficient management with MongoDB and SQL.</p>
          </div>

          <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#64ffda]/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-[#64ffda] mb-2">
              <Palette size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white text-sm md:text-base">UI/UX Design</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-snug">Crafting interfaces with Tailwind and Figma.</p>
          </div>

          <div className="group p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#64ffda]/50 transition-all duration-300">
            <div className="flex items-center gap-3 text-[#64ffda] mb-2">
              <Rocket size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white text-sm md:text-base">Deployment</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-snug">Shipping apps to AWS and Vercel.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Image Container */}
      <div className="order-1 lg:order-2 flex justify-center items-center relative px-4 w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[400px] bg-[#64ffda]/10 blur-[100px] rounded-full"></div>
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] group">
          <div className="absolute inset-0 border-2 border-[#64ffda]/20 rounded-2xl -rotate-3 scale-105 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500"></div>
          <div className="absolute inset-0 border-2 border-gray-700 rounded-2xl rotate-3 scale-105 group-hover:rotate-0 transition-all duration-500"></div>
          <div className="relative z-10 overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-6 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-[#64ffda]/5 to-transparent rounded-full blur-2xl"></div>
            <img
              src={courseImg}
              alt="Developer Illustration"
              className="w-full h-auto object-contain relative z-20 transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced & Centered Education Heading */}
    <div className="mb-20 px-4 text-center" id="education">
      <div className="inline-flex items-center justify-center gap-4 w-full">
        <div className="flex items-center justify-center gap-4 w-full">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-700 to-[#64ffda]"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-400 to-[#64ffda] bg-clip-text text-transparent leading-tight px-4">
          My Education
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-700 to-[#64ffda]"></div>
      </div>
      </div>
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        My academic path and specialized training.
      </p>
    </div>

    {/* Education Timeline */}
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#64ffda] via-yellow-400 to-pink-500 rounded-full"></div>

      {courses.map((course, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-12 w-full">
            <div className={`hidden md:flex md:w-1/2 ${isLeft ? "justify-end pr-12" : ""}`}>
              {isLeft && (
                <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md border border-gray-700 hover:scale-105 transition-transform">
                  <span className="text-[#64ffda] font-bold">{course.year}</span>
                  <h3 className="text-2xl font-bold mt-1">{course.title}</h3>
                  <p className="text-gray-400 mt-2">{getDescription(course.title)}</p>
                </div>
              )}
            </div>

            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#64ffda] w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-gray-900 shadow-lg"></div>
            </div>

            <div className={`w-full md:w-1/2 pl-12 md:pl-12 flex justify-start`}>
              {(!isLeft || true) && (
                <div className={`bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md border border-gray-700 hover:scale-105 transition-transform ${isLeft ? "md:hidden" : "block"}`}>
                  <span className="text-[#64ffda] font-bold">{course.year}</span>
                  <h3 className="text-2xl font-bold mt-1">{course.title}</h3>
                  <p className="text-gray-400 mt-2">{getDescription(course.title)}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}
