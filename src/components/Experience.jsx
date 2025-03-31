import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Initialize refs array
    itemRefs.current = itemRefs.current.slice(0, EXPERIENCES.length);

    // Observer for the section title
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    // Observer for each experience item
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Add observers
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    // Cleanup
    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      itemRefs.current.forEach((ref) => {
        if (ref) itemObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="border-b border-neutral-900 pb-12 pt-8">
      <h2 
        ref={sectionRef}
        className="my-20 text-center text-4xl font-bold text-neutral-100 opacity-0 translate-y-10 transition-all duration-700"
      >
        <span className="text-purple-500">Experience</span>
      </h2>

      <div className="space-y-16">
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index} 
            ref={(el) => (itemRefs.current[index] = el)}
            className="flex flex-wrap lg:justify-center opacity-0 translate-x-10 transition-all duration-500"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm font-medium text-purple-400 border-l-2 border-purple-500 pl-3">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-lg lg:w-3/4 group hover:bg-neutral-800/20 p-4 rounded-lg transition-all duration-300">
              <h6 className="mb-2 font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                {experience.role}{" "}
                <span className="text-sm text-neutral-300">@</span>{" "}
                <span className="text-purple-300">{experience.company}</span>
              </h6>
              <p className="mb-6 text-neutral-400 leading-relaxed">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300 rounded-full shadow-sm hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;