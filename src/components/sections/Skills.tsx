import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { skills } from '../../data/personalData';
import { 
  Code, 
  Brain, 
  Bot, 
  Eye, 
  Heart,
  Terminal,
  Database,
  LineChart,
  Camera,
  Layout
} from 'lucide-react';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Technical Expertise
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming Languages */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <Terminal size={24} className="text-purple-500" />
              </div>
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Programming
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Python</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Expert in Python for AI/ML applications, data analysis, and automation
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Java</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Strong foundation in Java for application development and algorithms
                </p>
              </div>
            </div>
          </div>
          
          {/* Machine Learning */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <Brain size={24} className="text-purple-500" />
              </div>
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Machine Learning
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Supervised Learning</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Classification, regression, and ensemble methods for predictive modeling
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Deep Learning</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Neural networks, CNN, RNN for complex pattern recognition
                </p>
              </div>
            </div>
          </div>
          
          {/* Artificial Intelligence */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <Bot size={24} className="text-purple-500" />
              </div>
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                AI Specialization
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Generative & Agentic AI</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Creating and deploying advanced AI models for content generation and autonomous systems
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Prompt Engineering</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Expert in crafting effective prompts for LLMs and AI systems
                </p>
              </div>
            </div>
          </div>
          
          {/* Computer Vision */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <Eye size={24} className="text-purple-500" />
              </div>
              <h3 className={`text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Computer Vision
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Image Processing</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Advanced techniques in image analysis and enhancement using OpenCV
                </p>
              </div>
              <div>
                <h4 className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>Object Detection</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Real-time object detection and tracking systems
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Areas of Interest */}
        <div className="mt-16">
          <h3 className={`text-2xl font-semibold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Areas of Interest
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <Bot size={24} className="text-purple-500" />
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Artificial Intelligence</h4>
              </div>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Exploring cutting-edge AI technologies and their real-world applications
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <Brain size={24} className="text-purple-500" />
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Machine Learning</h4>
              </div>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Developing intelligent systems that learn and adapt from data
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <Terminal size={24} className="text-purple-500" />
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Generative AI</h4>
              </div>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Creating AI systems that can generate new, original content
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <Bot size={24} className="text-purple-500" />
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Agentic AI</h4>
              </div>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Building autonomous AI agents that can make decisions and take actions
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <Layout size={24} className="text-purple-500" />
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>UI/UX Design</h4>
              </div>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Creating intuitive and beautiful user interfaces for AI applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;