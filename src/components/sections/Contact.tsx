import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/personalData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send 
} from 'lucide-react';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Get In Touch
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <Phone size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Phone
                  </h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                    } transition-colors`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <Mail size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email
                  </h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className={`${
                      theme === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                    } transition-colors`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <MapPin size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </h4>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className={`text-lg font-medium mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h4>
              
              <div className="flex gap-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:border-purple-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-purple-500'
                  } border focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 outline-none transition-colors`}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:border-purple-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-purple-500'
                  } border focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 outline-none transition-colors`}
                  placeholder="johndoe@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:border-purple-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-purple-500'
                  } border focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 outline-none transition-colors`}
                  placeholder="Hello, I'd like to connect with you regarding..."
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transition-opacity'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;