import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="pt-20 pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div
            ref={contentRef}
            className="mt-8 md:mt-0 md:w-1/2 transform translate-x-[-50px] opacity-0 transition-all duration-700 slide-content"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Nirav
              <span
                className="block text-blue-600 animate-fadeIn"
                style={{ animationDelay: '0.3s' }}
              >
                Frontend Developer
              </span>
            </h1>

            <p
              className="text-lg text-gray-600 mb-8 animate-fadeIn"
              style={{ animationDelay: '0.6s' }}
            >
              I create responsive and user-friendly web experiences using modern technologies.
              Passionate about clean code and beautiful designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: '0.9s' }}
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/your-google-drive-id/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: '1.2s' }}
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/NiravDev3039"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:rotate-12 social-icon"
                style={{ animationDelay: '1.5s' }}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nirav-patel-22888212a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:rotate-12 social-icon"
                style={{ animationDelay: '1.6s' }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/itz__nirav__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-125 hover:rotate-12 social-icon"
                style={{ animationDelay: '1.7s' }}
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div
            ref={imageRef}
            className="md:w-1/2 flex justify-center transform scale-0 opacity-0 transition-all duration-700 image-container"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="nirav.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slide-content.show {
          transform: translateX(0);
          opacity: 1;
        }

        .image-container.show {
          transform: scale(1);
          opacity: 1;
        }

        .social-icon {
          opacity: 0;
          transform: scale(0);
          animation: popIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
