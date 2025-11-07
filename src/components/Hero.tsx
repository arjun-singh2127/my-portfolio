'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-cyan-500 to-purple-600 dark:from-blue-800 dark:via-cyan-800 dark:to-purple-800 opacity-75 animate-gradient-shift-reverse"></div>
      
      {/* Content Container with backdrop */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
            Hi, I'm{' '}
            <span className="text-yellow-300 dark:text-yellow-200">Arjun Singh</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 dark:text-white mb-3 sm:mb-4 drop-shadow-md px-2">
            Student / Programmer / Aspiring Game Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 dark:text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow px-4">
            I love working with computers, having fun developing everything I need to. I plan to head into mechatronics for specialization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/30 cursor-pointer text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-white/20 hover:border-white transition-all backdrop-blur-sm cursor-pointer text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-12 md:mt-16 animate-bounce">
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="text-white dark:text-gray-200 hover:text-gray-100 dark:hover:text-white cursor-pointer"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

