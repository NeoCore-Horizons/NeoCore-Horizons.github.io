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
  // Get the base URL for GitHub Pages compatibility
  const baseName = process.env.PUBLIC_URL || '';

  return (
    <Router basename={baseName}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        {/* Add a catch-all route that redirects to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;