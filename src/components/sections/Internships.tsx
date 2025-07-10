import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { internships, certifications, valueAddedCourses } from '../../data/personalData';
import { Briefcase, CheckCircle, Bookmark } from 'lucide-react';

const Internships: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="internships" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Experience & Certifications
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internships */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Briefcase size={24} className="text-purple-500" />
                <span>Internships</span>
              </div>
            </h3>
            
            <div className="space-y-6">
              {internships.map((internship) => (
                <div 
                  key={internship.id}
                  className={`p-6 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  } shadow-md border-l-4 border-purple-500`}
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h4 className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {internship.role}
                    </h4>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {internship.period}
                    </span>
                  </div>
                  
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {internship.company}
                    </span> - {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-purple-500" />
                <span>Certifications</span>
              </div>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  } shadow-md hover:-translate-y-1 transition-transform`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h4>
                  
                  <div className="flex justify-between">
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {cert.issuer}
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Bookmark size={24} className="text-purple-500" />
                <span>Value Added Courses</span>
              </div>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueAddedCourses.map((course) => (
                <div 
                  key={course.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  } shadow-md hover:-translate-y-1 transition-transform`}
                >
                  <h4 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {course.title}
                  </h4>
                  
                  <div className="flex justify-between">
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {course.institution}
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {course.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;