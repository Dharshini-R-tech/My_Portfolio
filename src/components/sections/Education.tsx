import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { education } from '../../data/personalData';
import { GraduationCap, School, Award } from 'lucide-react';

const Education: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="education" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 to-cyan-500"></div>
            
            {/* College Education */}
            <div className="relative flex mb-12">
              <div className={`absolute left-8 transform -translate-x-1/2 w-16 h-16 rounded-full ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } border-4 border-purple-500 flex items-center justify-center z-10`}>
                <GraduationCap size={24} className="text-purple-500" />
              </div>
              
              <div className={`ml-20 p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}>
                <div className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${
                  theme === 'dark' ? 'bg-gray-800 text-purple-400' : 'bg-purple-100 text-purple-700'
                }`}>
                  {education.degree.period}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {education.degree.title}
                </h3>
                
                <p className={`mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {education.degree.institution}
                </p>
                
                <p className={`font-medium ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  CGPA: {education.degree.cgpa}
                </p>
              </div>
            </div>
            
            {/* Higher Secondary Education */}
            <div className="relative flex mb-12">
              <div className={`absolute left-8 transform -translate-x-1/2 w-16 h-16 rounded-full ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } border-4 border-indigo-500 flex items-center justify-center z-10`}>
                <School size={24} className="text-indigo-500" />
              </div>
              
              <div className={`ml-20 p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}>
                <div className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${
                  theme === 'dark' ? 'bg-gray-800 text-indigo-400' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {education.hsc.year}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Higher Secondary Certificate (HSC)
                </h3>
                
                <p className={`mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {education.hsc.institution}
                </p>
                
                <p className={`font-medium ${
                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  Percentage: {education.hsc.percentage}%
                </p>
              </div>
            </div>
            
            {/* Secondary Education */}
            <div className="relative flex">
              <div className={`absolute left-8 transform -translate-x-1/2 w-16 h-16 rounded-full ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } border-4 border-cyan-500 flex items-center justify-center z-10`}>
                <Award size={24} className="text-cyan-500" />
              </div>
              
              <div className={`ml-20 p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}>
                <div className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${
                  theme === 'dark' ? 'bg-gray-800 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                }`}>
                  {education.sslc.year}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Secondary School Leaving Certificate (SSLC)
                </h3>
                
                <p className={`mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {education.sslc.institution}
                </p>
                
                <p className={`font-medium ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  Percentage: {education.sslc.percentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;