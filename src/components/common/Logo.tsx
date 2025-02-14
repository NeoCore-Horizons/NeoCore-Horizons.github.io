import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <picture className={`${styles.logo} ${className || ''}`}>
      <source media="(min-width: 1024px)" srcSet="/assets/images/logo.svg" />
      <source media="(min-width: 768px)" srcSet="/assets/images/logo.svg" />
      <img
        src="/assets/images/logo.svg"
        alt="NeoCore Horizons Logo"
        title="NeoCore Horizons - Innovating for Tomorrow"
        className={styles.logoImage}
      />
    </picture>
  );
};
