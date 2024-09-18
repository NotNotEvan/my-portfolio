import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
