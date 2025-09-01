import React, { useEffect, useRef } from "react";
// Assuming you're using React Router
import img from "../Images/Profile.jpeg";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-8");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        elementsRef.current.forEach(el => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Scroll to the projects section
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll to contact section
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative py-20 lg:py-32 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start space-y-8">
                            <h1
                                ref={el => elementsRef.current[0] = el}
                                className="text-6xl lg:text-8xl font-extralight tracking-tighter transition-all duration-700 ease-out opacity-0 translate-y-8"
                            >
                                <span className="relative inline-block">
                                    I'm Saahil Bahukhandi
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-400 to-blue-500"></span>
                                </span>
                            </h1>

                            <div
                                ref={el => elementsRef.current[1] = el}
                                className="transition-all duration-700 delay-300 ease-out opacity-0 translate-y-8"
                            >
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-4xl lg:text-5xl font-medium tracking-tight text-transparent">
                                    Full Stack Web-Developer
                                </span>
                            </div>

                            <p
                                ref={el => elementsRef.current[2] = el}
                                className="max-w-xl py-2 font-light text-lg tracking-wide leading-relaxed transition-all duration-700 delay-500 ease-out opacity-0 translate-y-8 text-neutral-700 dark:text-neutral-300"
                            >
                                {HERO_CONTENT}
                            </p>

                            <div
                                ref={el => elementsRef.current[3] = el}
                                className="flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-700 ease-out opacity-0 translate-y-8"
                            >
                                {/* Projects Button - Using onClick for smooth scroll */}
                                <button 
                                    onClick={scrollToProjects}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/20 font-medium"
                                >
                                    View Projects
                                </button>
                                
                                {/* Resume Button - External link with proper attributes */}
                                <a
                                    href="https://drive.google.com/file/d/1csVfy3BuW_9R559GfSvk9jOVAVFMkHjN/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/20 font-medium">
                                        View Resume
                                    </button>
                                </a>

                                {/* Contact Button - Using onClick for smooth scroll */}
                                <button 
                                    onClick={scrollToContact}
                                    className="px-8 py-3 border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 font-medium"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div
                            ref={el => elementsRef.current[4] = el}
                            className="relative transition-all duration-700 ease-out opacity-0 translate-y-8"
                        >
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-blue-500 rounded-full z-0 opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 lg:w-24 lg:h-24 bg-purple-600 rounded-full z-0 opacity-20"></div>

                            {/* Main image */}
                            <div className="relative bg-gradient-to-r p-1 from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-2xl">
                                <img
                                    src={img}
                                    alt="Profile"
                                    className="w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white dark:border-neutral-900"
                                />
                            </div>

                            {/* Floating accent shapes */}
                            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-emerald-400 rounded-full mix-blend-multiply opacity-70 animate-pulse"></div>
                            <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-blue-400 rounded-full mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: "1s" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-full h-1/2  pointer-events-none"></div>
        </section>
    );
};

export default Hero;
