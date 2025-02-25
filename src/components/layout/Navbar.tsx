import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/layout/Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <img
            src="/assets/images/logoNoTxt.svg"
            alt="NeoCore Horizons Logo"
            title="NeoCore Horizons Logo"
            width={40}
            height={40}
          />
        </Link>
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
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#vision" onClick={closeMenu}>
            Our Vision
          </Link>
        </li>
        <li>
          <Link to="/our-work" onClick={closeMenu}>
            Our Work
          </Link>
        </li>
        <li>
          <Link to="/#contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};