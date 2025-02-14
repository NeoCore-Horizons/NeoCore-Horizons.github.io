import React from 'react';
import styles from '../../styles/components/sections/Contact.module.css';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get in Touch</h2>
      <p>
        Email us at <a href="mailto:office@neocorehorizons.com">office@neocorehorizons.com</a>
      </p>
    </section>
  );
};
