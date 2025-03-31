import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <nav className="p-4 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with continuous shine animation */}
        <div className="overflow-hidden">
          <h1 
            className={`relative text-6xl font-bold transform transition-all duration-1000 ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            {/* Base text with gradient */}
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent relative z-10">
              SiD
            </span>
            
            {/* Shine effect overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-20 animate-shine"></span>
          </h1>
        </div>
        
        {/* Social Icons with staggered animation */}
        <div className="flex space-x-4">
          {[
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/siddhartha-gupta-570014321/", hoverColor: "hover:text-blue-500", delay: 100 },
            { Icon: FaGithub, href: "https://github.com/siddhartha2228065", hoverColor: "hover:text-gray-400", delay: 200 },
            { Icon: FaInstagram, href: "https://www.instagram.com/sidd_7770/?utm_source=qr&igsh=MTRtOG5xZ2Z6b3Boeg%3D%3D#", hoverColor: "hover:text-pink-500", delay: 300 },
            { Icon: FaTwitter, href: "https://twitter.com", hoverColor: "hover:text-blue-400", delay: 400 },
            { Icon: FaFileAlt, href: "https://drive.google.com/file/d/1csVfy3BuW_9R559GfSvk9jOVAVFMkHjN/view?usp=drive_link", hoverColor: "hover:text-green-400", delay: 500 }
          ].map(({ Icon, href, hoverColor, delay }, index) => (
            <a 
              key={index}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform transition-all duration-500 ease-in-out hover:scale-125 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <Icon className={`text-white text-2xl transition-colors duration-300 ${hoverColor}`} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}