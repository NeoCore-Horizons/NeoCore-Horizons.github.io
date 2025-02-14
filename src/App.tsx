import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Vision } from './components/sections/Vision';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
