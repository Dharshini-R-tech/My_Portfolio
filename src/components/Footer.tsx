import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronUp 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className={`py-8 ${
      theme === 'dark' ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Dharshini R
            </h3>
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              AI & Data Science Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://bit.ly/repo_hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://bit.ly/dharshini_in_linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:dharshiniramasamy885@gmail.com" 
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+918072542214" 
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Dharshini R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;