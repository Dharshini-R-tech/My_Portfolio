import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Internships from './components/sections/Internships';
import Hackathons from './components/sections/Hackathons';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Dharshini R - AI & Data Science Portfolio";
    
    // Find and update the favicon if it exists
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon.ico"; // This will use a custom favicon if you add one
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Internships />
        <Hackathons />
        <Contact />
        <ScrollToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App;