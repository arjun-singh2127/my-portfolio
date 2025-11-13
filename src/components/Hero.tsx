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
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-lime-500 to-emerald-600 dark:from-emerald-900 dark:via-green-950 dark:to-black animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-green-300 via-emerald-400 to-lime-500 dark:from-emerald-800 dark:via-green-900 dark:to-black opacity-75 animate-gradient-shift-reverse"></div>
      
      {/* Content Container with backdrop */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
            Hi, I'm{' '}
            <span className="text-lime-300 dark:text-lime-200">Arjun Singh</span>
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
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-emerald-500/90 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-emerald-400/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-emerald-300/70 cursor-pointer text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-emerald-300/80 text-emerald-950 bg-emerald-100/80 rounded-lg font-semibold hover:bg-emerald-200 hover:border-emerald-200 transition-all backdrop-blur-sm cursor-pointer text-center dark:text-emerald-100 dark:bg-emerald-700/40 dark:hover:bg-emerald-600/50"
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


