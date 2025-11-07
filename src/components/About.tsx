'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Tailwind CSS',
    'Git',
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start md:items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 md:-translate-x-10 translate-y-10 md:translate-y-0'
            }`}
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              I'm a passionate full-stack developer with a love for creating
              elegant solutions to complex problems. With experience in modern
              web technologies, I bring ideas to life through clean, efficient
              code.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>
          <div
            ref={skillsRef}
            className={`transition-all duration-1000 delay-300 ${
              skillsVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 md:translate-x-10 translate-y-10 md:translate-y-0'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 ${
                    skillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

