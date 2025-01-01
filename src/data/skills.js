
import React, { useState } from 'react';
import { Code, Terminal, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5/CSS3', level: 'Expert' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Bootstrap', level: 'Advanced' },
    ],
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    icon: Terminal,
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 'Advanced' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'npm/yarn', level: 'Advanced' },
      { name: 'Command Line', level: 'Intermediate' },
    ],
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      { name: 'Communication', level: 'Expert' },
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Team Collaboration', level: 'Expert' },
      { name: 'Time Management', level: 'Advanced' },
    ],
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
  },
];

const SkillCard = ({ skill, level, animate }) => {
  const levelStyles = {
    Expert: 'rotate-45 scale-110',
    Advanced: 'rotate-0 scale-100',
    Intermediate: '-rotate-45 scale-90',
  };

  return (
    <div className="relative group">
      <div 
        className={`
          w-32 h-32 rounded-xl bg-white shadow-lg p-4
          transform transition-all duration-500 cursor-pointer
          ${animate ? levelStyles[level] : ''}
          hover:shadow-xl hover:scale-105
        `}
      >
        <div className="h-full w-full flex items-center justify-center text-center">
          <span className="text-sm font-medium text-gray-700">{skill}</span>
        </div>
      </div>
      <div className="
        absolute -bottom-8 left-1/2 transform -translate-x-1/2
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        text-xs font-semibold bg-gray-800 text-white px-2 py-1 rounded
      ">
        {level}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleCategoryClick = (index) => {
    setAnimate(false);
    setActiveCategory(index);
    setTimeout(() => setAnimate(true), 100);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Skills & Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => handleCategoryClick(index)}
              className={`
                px-6 py-3 rounded-full flex items-center gap-2
                transition-all duration-300 transform
                ${activeCategory === index 
                  ? `${category.color} text-white scale-105` 
                  : 'bg-white text-gray-600 hover:scale-105'}
              `}
            >
              <category.icon className="h-5 w-5" />
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[100px]">
          {activeCategory !== null && (
            <div className="flex flex-wrap justify-center gap-8">
              {skillCategories[activeCategory].skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  animate={animate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

