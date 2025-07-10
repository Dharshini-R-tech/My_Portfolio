import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo, aboutMe } from '../../data/personalData';
import { 
  Calendar, 
  Flag, 
  Heart, 
  Languages, 
  Book, 
  Layers
} from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="about" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              About Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Who I Am
            </h3>
            
            <div className="space-y-6">
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {aboutMe.bio}
              </p>
              
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {aboutMe.passion}
              </p>
              
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {aboutMe.goals}
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Personal Details
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Calendar size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Date of Birth
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.dob} (Age: {personalInfo.age})
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Flag size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Nationality
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.nationality}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Heart size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Blood Group
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.bloodGroup}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Languages size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Languages
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.languages.join(', ')}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Book size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Hobbies
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.hobbies.join(', ')}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Layers size={20} className="text-purple-500" />
                  </div>
                  <h4 className={`font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Location
                  </h4>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;