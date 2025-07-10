import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { hackathons, presentations, workshops, extraCurricular } from '../../data/personalData';
import { 
  Trophy, 
  Presentation, 
  Lightbulb,
  Users
} from 'lucide-react';

const Hackathons: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="hackathons" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Activities & Achievements
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hackathons */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Trophy size={24} className="text-purple-500" />
                <span>Hackathons</span>
              </div>
            </h3>
            
            <div className="space-y-4">
              {hackathons.map((hackathon) => (
                <div 
                  key={hackathon.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {hackathon.name}
                    </h4>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {hackathon.date}
                    </span>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {hackathon.project}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Presentations */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Presentation size={24} className="text-purple-500" />
                <span>Presentations</span>
              </div>
            </h3>
            
            <div className="space-y-4">
              {presentations.map((presentation) => (
                <div 
                  key={presentation.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {presentation.topic}
                    </h4>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {presentation.date}
                    </span>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {presentation.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Workshops */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Lightbulb size={24} className="text-purple-500" />
                <span>Workshops Attended</span>
              </div>
            </h3>
            
            <div className="space-y-4">
              {workshops.map((workshop) => (
                <div 
                  key={workshop.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {workshop.name}
                    </h4>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {workshop.date}
                    </span>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {workshop.organizer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Extra-Curricular Activities */}
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="flex items-center gap-3">
                <Users size={24} className="text-purple-500" />
                <span>Extra-Curricular</span>
              </div>
            </h3>
            
            <div className="space-y-4">
              {extraCurricular.map((activity) => (
                <div 
                  key={activity.id}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {activity.activity}
                    </h4>
                    {activity.period || activity.date ? (
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {activity.period || activity.date}
                      </span>
                    ) : null}
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

export default Hackathons;