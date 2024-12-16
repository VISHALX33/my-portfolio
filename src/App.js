
import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import SkillRoadmap from './SkillRoadmap';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Introduction />
        <AboutMe />
        
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
