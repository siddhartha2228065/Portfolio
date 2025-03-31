import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="mb-20 text-center text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              ref={el => projectRefs.current[index] = el}
              className="flex flex-col lg:flex-row items-start gap-8 opacity-0 transition-all duration-700 transform translate-y-10 hover:shadow-lg hover:shadow-purple-900/10 p-6 rounded-lg border border-neutral-800"
            >
              <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="w-full lg:w-3/4">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="mb-6 text-neutral-300 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 font-medium text-sm border border-purple-800/50 transition-all duration-300 hover:bg-purple-900/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-purple-700 text-white font-medium transition-all duration-300 hover:bg-purple-600"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md bg-neutral-800 text-white font-medium transition-all duration-300 hover:bg-neutral-700"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;