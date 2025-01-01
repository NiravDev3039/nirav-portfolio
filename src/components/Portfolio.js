import React, { useState } from 'react';
import { Github, Globe, Search, Tag, Code, Layers } from 'lucide-react';

const projects = [
  {
    id: 7,
    title: 'Travel Website',
    category: 'react',
    tags: ['frontend', 'ui/ux'],
    description: 'A Traveling Website using React allows users to explore destinations.',
    technologies: ['React', 'Tailwind'],
    liveUrl: 'https://traveling-mocha.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/Traveling-web',
    image: 'travel.png'
  },
  {
    id: 2,
    title: 'Photography',
    category: 'react',
    tags: ['frontend', 'auth'],
    description: 'A login page with Firebase Authentication.',
    technologies: ['JavaScript', 'Firebase'],
    liveUrl: 'https://photography-five-steel.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/photography',
    image: 'photography.png'
  },
  {
    id: 3,
    title: 'RBAC Dashboard',
    category: 'react',
    tags: ['dashboard', 'admin'],
    description: 'Role-Based Access Control Dashboard for user management.',
    technologies: ['React', 'Tailwind'],
    liveUrl: 'https://rbac-ui-dashboard.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/RBAC-UI-Dashboard',
    image: 'RBAC.png'
  },
  {
    id: 4,
    title: 'Currency Converter',
    category: 'javascript',
    tags:  ["finance", "utility", "converter"],
   description: "A dynamic Currency Converter app that allows users to convert amounts between multiple currencies using real-time exchange rates.",
    technologies: ['HTML', 'CSS' ,'Javascript'],
    liveUrl: 'https://currency-navy.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/Currency',
    image: 'currency.png'
  },
  {
    id: 5,
    title: 'age',
    category: 'javascript',
    tags: ["calculator", "utility", "date"],
   description: "An interactive age calculator that computes the exact age in years, months, and days based on the user's input date of birth.",
   technologies: ['HTML', 'CSS' ,'Javascript'],
    liveUrl: 'https://age-calculator-sepia-nine.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/Age-Calculator',
    image: 'age.png'
  },
  {
    id: 6,
    title: 'Image Resizer',
    category: 'javascript',
    tags: ["image", "tools", "utility"],
    description: "A versatile Image Resizer tool that allows users to resize images by pixels or percentage and download the resized version.",
    technologies: ['HTML', 'CSS' ,'Javascript'],
    liveUrl: 'https://resize-image-javascript.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/Resize-image-javascript',
    image: 'resize.png'
  },
  {
    id: 8,
    title: 'Password Generator',
    category: 'javascript',
    tags: ["security", "utility", "password-generator"],
    description: "A tool to generate strong, secure passwords with customizable length and character options, ensuring better online security.",
    technologies: ['HTML', 'CSS' ,'Javascript'],
    liveUrl: 'https://password-generator-eight-tau-43.vercel.app/',
    githubUrl: 'https://github.com/NiravDev3039/Password-Generator',
    image: 'password.png'
  },
  {
    id: 1,
    title: 'Shoply',
    category: 'react',
    tags: ["e-commerce", "authentication", "React"],
    description: "An e-commerce website using FakeStore API with user authentication, featuring secure login, product browsing, and cart management.",
    technologies: ['React', 'Tailwind'],
    liveUrl: 'https://shoply-ten.vercel.app/products',
    githubUrl: 'https://github.com/NiravDev3039/Shoply',
    image: 'shoply.png'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="portfolio" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-64 px-4 py-2 pl-10 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-purple-500 outline-none"
            >
              <option value="all">All Projects</option>
              <option value="react">React</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm backdrop-blur-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm">
                        <Code className="h-3 w-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;