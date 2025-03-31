import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-gray-300 pt-12 pb-8 border-t border-neutral-800">
      {/* CSS for animations */}
      <style jsx>{`
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-5px);
          color: #8b5cf6;
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(to right, #8b5cf6, #6366f1);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-link:hover {
          color: #d1d5db;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-white">About</h3>
            <p className="text-gray-400 mb-4">Building innovative web solutions with cutting-edge technologies. Specializing in full-stack development with React, Node.js, and modern databases.</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/siddhartha2228065" className="social-icon text-gray-400 hover:text-violet-500">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/siddhartha-gupta-570014321/" className="social-icon text-gray-400 hover:text-violet-500">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="social-icon text-gray-400 hover:text-violet-500">
                <FaTwitter size={24} />
              </a>
              <a href="#contact" className="social-icon text-gray-400 hover:text-violet-500">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link text-gray-400">Home</a></li>
              <li><a href="#projects" className="footer-link text-gray-400">Projects</a></li>
              <li><a href="#tech" className="footer-link text-gray-400">Technologies</a></li>
              <li><a href="#about" className="footer-link text-gray-400">About Me</a></li>
              <li><a href="#contact" className="footer-link text-gray-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>siddharthagupta1275@gmail.com</li>
              <li>Bhubaneswar, Odisha</li>
              <li>Available for work</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Siddhartha. All rights reserved.</p>
          <p className="mt-2">Built with React.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;