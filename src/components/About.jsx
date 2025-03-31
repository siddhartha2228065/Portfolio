import React, { useEffect, useRef } from "react";
import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // Observer for fade-in animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-element");
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe elements
        if (imgRef.current) observer.observe(imgRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4">
            {/* CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .title-animation {
                    opacity: 0;
                }

                .img-animation {
                    opacity: 0;
                }

                .text-animation {
                    opacity: 0;
                }

                .animate-element.title-animation {
                    animation: fadeInUp 0.8s ease forwards;
                }

                .animate-element.img-animation {
                    animation: fadeInLeft 1s ease forwards 0.3s;
                }

                .animate-element.text-animation {
                    animation: fadeInRight 1s ease forwards 0.5s;
                }
            `}</style>

            <h2 
                ref={titleRef}
                className="my-20 text-center text-4xl title-animation"
            >
                About
                <span className="text-neutral-500"> Me</span>
            </h2>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center overflow-hidden">
                        <div
                            ref={imgRef}
                            className="img-animation"
                        >
                            <img 
                                className="rounded-2xl transition-transform duration-500 hover:scale-105" 
                                src={aboutImg} 
                                alt="about" 
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p 
                            ref={textRef}
                            className="my-2 max-w-xl py-6 text-animation"
                        >
                            <div className="whitespace-pre-line">{ABOUT_TEXT}</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;