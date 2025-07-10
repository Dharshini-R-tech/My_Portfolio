import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/personalData';
import { Github, Linkedin, Mail, Phone, ChevronDown, MapPin, X } from 'lucide-react';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showOpenToWork, setShowOpenToWork] = useState(false);
  
  // Typing animation effect
  useEffect(() => {
    const titles = [
      "AI & Data Science Enthusiast",
      "Generative AI Developer",
      "Prompt Engineer",
      "UI/UX Design Enthusiast"
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        // Typing text
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100; // Normal speed when typing
      }
      
      // If word is complete
      if (!isDeleting && charIndex === currentTitle.length) {
        // Pause at the end of typing
        setIsTyping(false);
        typingSpeed = 2000; // Wait before deleting
        setTimeout(() => {
          setIsTyping(true);
          isDeleting = true;
        }, typingSpeed);
        return;
      }
      
      // If deletion is complete
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length; // Move to next title
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timer = setTimeout(type, 1000); // Initial delay
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
        <div className={`absolute top-0 -right-4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className={`text-lg font-medium ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Hello, I'm
            </h2>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="h-12">
              <h2 className="text-2xl sm:text-3xl font-medium flex">
                <span>{displayText}</span>
                <span className={`ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}>|</span>
              </h2>
            </div>
            
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {personalInfo.quote}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Explore My Work
                </button>
                
                <button
                  onClick={() => setShowOpenToWork(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <MapPin size={18} />
                  Open to Work
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 ${
              theme === 'dark' ? 'border-purple-600' : 'border-purple-500'
            } shadow-2xl`}>
              <img 
                src="/Dharshini.jpg" 
                alt="Dharshini R - AI & Data Science Enthusiast"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className={`p-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
      
      {/* Open to Work Modal */}
      {showOpenToWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setShowOpenToWork(false)}>
          <div 
            className={`relative max-w-2xl w-full rounded-lg shadow-xl ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg" 
                alt="Travel and work flexibility"
                className="w-full h-full object-cover"
              />
            </div>
            
            <button 
              onClick={() => setShowOpenToWork(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className={`text-2xl font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Open to Work Globally
                </h3>
              </div>
              
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Location is never a barrier for me. Flexible to work anywhere in the world – fully remote, hybrid, or on-site. Ready to collaborate globally; no location constraints.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-gray-800 text-green-400' : 'bg-green-100 text-green-700'
                }`}>
                  🌍 Global Remote
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  🏢 Hybrid Work
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-gray-800 text-purple-400' : 'bg-purple-100 text-purple-700'
                }`}>
                  🏛️ On-site
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-gray-800 text-orange-400' : 'bg-orange-100 text-orange-700'
                }`}>
                  ✈️ Relocation Ready
                </span>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      setShowOpenToWork(false);
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;