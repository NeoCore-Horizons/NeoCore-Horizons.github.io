import React from 'react';
import { getCurrentYear } from '../../utils/helpers';
import styles from '../../styles/components/layout/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {getCurrentYear()} NeoCore Horizons</p>
    </footer>
  );
};
