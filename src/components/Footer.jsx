import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/sk-sabbir-ali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919556716069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:sksabbirali99@gmail.com"
            className="text-gray-400 hover:text-red-500 transition transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/sabbirShaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sk Sabbir Ali. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
