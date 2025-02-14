import React, { useState } from 'react';
import styles from '../../styles/components/layout/Navbar.module.css';
// ... rest of the file

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          src="/assets/images/logoNoTxt.svg"
          alt="NeoCore Horizons Logo"
          title="NeoCore Horizons Logo"
          width={40}
          height={40}
        />
      </div>
      <div
        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      ></div>
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
        aria-label="Main navigation"
      >
        <li>
          <a href="#home" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#vision">Our Vision</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
