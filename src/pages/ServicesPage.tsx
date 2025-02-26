// src/pages/ServicesPage.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Services } from '../components/sections/Services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;