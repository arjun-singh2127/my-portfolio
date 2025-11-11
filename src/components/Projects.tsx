'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  
  return (
    <div
      ref={elementRef}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a
            href={project.github}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
          <a
            href={project.demo}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  
  const projects = [
    {
      title: 'Unity Game Project',
      description:
        'A 2D platformer game built with Unity and C#. Features include player movement, enemy AI, collectibles, and multiple levels. Demonstrates game development fundamentals and object-oriented programming.',
      technologies: ['Unity', 'C#', 'Game Design', '2D Animation'],
      github: '#',
      demo: '#',
      image: '/project-1.svg',
    },
    {
      title: 'Web Application',
      description:
        'A full-stack web application built with modern technologies. Features user authentication, database integration, and responsive design. Showcases skills in both frontend and backend development.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Database'],
      github: '#',
      demo: '#',
      image: '/project-2.svg',
    },
    {
      title: 'Mechatronics Project',
      description:
        'An embedded systems project combining hardware and software. Features sensor integration, motor control, and real-time data processing. Demonstrates interdisciplinary skills in mechatronics engineering.',
      technologies: ['Arduino', 'C++', 'Electronics', 'Sensors'],
      github: '#',
      demo: '#',
      image: '/project-3.svg',
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
