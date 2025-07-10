import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, 
  X, 
  Sun, 
  Moon,
  FileDown
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  // Resume download function
  const downloadResume = () => {
    // This is a placeholder. You would replace this with actual resume file
    alert('Resume download functionality would be implemented here with an actual file.');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? theme === 'dark'
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
                Dharshini R
              </span>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            
            <button 
              onClick={downloadResume}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity"
            >
              <FileDown size={16} />
              <span>Resume</span>
            </button>
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
          <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
          <button onClick={() => scrollToSection('education')} className="mobile-nav-link">Education</button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
          
          <button 
            onClick={downloadResume}
            className="flex items-center gap-1 w-full px-4 py-2 mt-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity justify-center"
          >
            <FileDown size={16} />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;