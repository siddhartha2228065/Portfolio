import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(null);
  
  const copyToClipboard = (text, cardId) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedEmail(cardId);
        setTimeout(() => setCopiedEmail(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section id="contact" className="py-16 px-4 text-gray-100 relative">
      {/* Background gradient */}
      <div className="absolute inset-0  opacity-80 z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            I'm always open to new ideas and connections!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="backdrop-blur-md bg-black bg-opacity-30 rounded-xl p-8 border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-violet-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <PhoneIcon className="h-6 w-6 text-violet-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">+91 9161897770</p>
                  <p className="text-lg">+91 7523849556</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:siddharthagupta1275@gmail.com" className="text-lg hover:text-indigo-300 transition-colors">
                    siddharthagupta1275@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <MapPinIcon className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">KIIT University, Bhubaneshwar-751024, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-medium mb-4 text-gray-200">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/siddhartha2228065" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/siddhartha-gupta-570014321/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Email Me Directly */}
          <div className="backdrop-blur-md bg-black bg-opacity-30 rounded-xl p-8 border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-violet-300">Email Me Directly</h3>
            
            <div className="space-y-8">
              {/* First Gmail Card */}
              <div className="bg-gray-900 bg-opacity-40 rounded-xl overflow-hidden border border-gray-700 group hover:border-violet-500 transition-colors shadow-md">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-violet-600 bg-opacity-20 flex items-center justify-center mr-4">
                      <EnvelopeIcon className="text-violet-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">Primary Email</h4>
                      <p className="text-sm text-gray-400">siddharthagupta1275@gmail.com</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Reach out for professional inquiries, project collaborations, or any questions 
                    about my work and services.
                  </p>
                </div>
                
                <div className="border-t border-gray-700 p-4 bg-gray-800 bg-opacity-40">
                  <div className="flex gap-3">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=siddharthagupta1275@gmail.com&su=Hello+from+your+website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500 text-white py-3 px-4 rounded-lg hover:from-violet-600 hover:to-indigo-600 transition-all"
                    >
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      <span>Open Gmail</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard("siddharthagupta1275@gmail.com", "primary-card")}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-lg transition-colors"
                    >
                      {copiedEmail === "primary-card" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Second Gmail Card */}
              <div className="bg-gray-900 bg-opacity-40 rounded-xl overflow-hidden border border-gray-700 group hover:border-violet-500 transition-colors shadow-md">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 bg-opacity-20 flex items-center justify-center mr-4">
                      <EnvelopeIcon className="text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">Secondary Email</h4>
                      <p className="text-sm text-gray-400">sidd62601@gmail.com</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Use this email for educational inquiries, technical discussions, or if you're a fellow developer looking to connect.
                  </p>
                </div>
                
                <div className="border-t border-gray-700 p-4 bg-gray-800 bg-opacity-40">
                  <div className="flex gap-3">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sidd62601@gmail.com&su=Hello+from+your+website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
                    >
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      <span>Open Gmail</span>
                    </a>
                    <button 
                      onClick={() => copyToClipboard("sidd62601@gmail.com", "secondary-card")}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 px-4 rounded-lg transition-colors"
                    >
                      {copiedEmail === "secondary-card" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;