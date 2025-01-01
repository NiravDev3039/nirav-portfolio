import React, { useEffect, useRef } from 'react';

const About = () => {
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Tools', items: ['Github', 'VS Code', 'Figma', 'npm'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Team Collaboration'] }
  ];

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

    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);

    return () => {
      if (leftColRef.current) observer.unobserve(leftColRef.current);
      if (rightColRef.current) observer.unobserve(rightColRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 animate-fadeIn">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={leftColRef}
            className="transform -translate-x-12 opacity-0 transition-all duration-700 slide-content"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Who I Am
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Frontend Developer with a keen eye for creating beautiful, 
              responsive websites. With a strong foundation in modern web technologies, 
              I specialize in building exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in web development started 1.5 years ago, and since then, 
              I've been continuously learning and improving my skills to stay up-to-date 
              with the latest technologies and best practices.
            </p>
          </div>

          <div 
            ref={rightColRef}
            className="transform translate-x-12 opacity-0 transition-all duration-700 slide-content"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <div 
                  key={skillGroup.category}
                  className="skill-group"
                  style={{ animationDelay: `${groupIndex * 0.2}s` }}
                >
                  <h4 className="text-lg font-medium text-gray-700 mb-2">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm skill-item hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${groupIndex * 0.2 + index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slide-content.show {
          transform: translateX(0);
          opacity: 1;
        }

        .skill-group {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .skill-item {
          opacity: 0;
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

export default About;