// src/pages/OurWorkPage.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { OurWork } from '../components/sections/OurWork';

const OurWorkPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <OurWork />
      </main>
      <Footer />
    </>
  );
};

export default OurWorkPage;