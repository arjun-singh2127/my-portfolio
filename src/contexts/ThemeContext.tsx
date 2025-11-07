'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      // Also add it to html element explicitly
      root.setAttribute('data-theme', newTheme);
      console.log('Applied theme:', newTheme, 'Classes:', root.classList.toString());
    }
  };

  useEffect(() => {
    setMounted(true);
    // Check if dark class is already set by the script
    const hasDarkClass = document.documentElement.classList.contains('dark');
    
    // Check localStorage first, then script-set class, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    
    const initialTheme = savedTheme || (hasDarkClass ? 'dark' : systemPreference);
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
      // Force a re-render to ensure all components update
      console.log('Theme toggled to:', newTheme);
    }
  };

  // Always provide context, even before mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

