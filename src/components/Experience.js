import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Concept Education System',
    location: 'Rankuva, Navsari',
    period: 'Dec 2023 - Dec 2024',
    description: [
      'Developed and maintained interactive, user-friendly interfaces using React, HTML, CSS, and JavaScript',
      'Implemented responsive design principles to ensure seamless performance across devices',
      'Optimized frontend performance, improving loading speeds by 40%',
      'Collaborated with team members to integrate backend APIs and ensure smooth data flow',
      'Created reusable UI components to streamline development and improve consistency across projects',
    ],
  },
  
  {
    id: 2,
    role: 'React Js Developer',
    company: 'UBS',
    location: 'Surat',
    period: 'April 2023 - Oct 2023',
    description: [
      'Developed and maintained client websites using React and Tailwind CSS',
      'Collaborated with designers to implement pixel-perfect UI components',
      'Integrated third-party APIs and services',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="relative pl-8 border-l-2 border-blue-600"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
                
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {experience.role}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-4">
                    {experience.company}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;