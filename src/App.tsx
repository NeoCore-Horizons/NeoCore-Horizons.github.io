import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Vision } from './components/sections/Vision';
import { Contact } from './components/sections/Contact';
import OurWorkPage from './pages/OurWorkPage';

const HomePage: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
      </Routes>
    </Router>
  );
};

export default App;