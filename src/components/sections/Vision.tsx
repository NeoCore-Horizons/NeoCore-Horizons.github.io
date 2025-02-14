import React from 'react';
import styles from '../../styles/components/sections/Vision.module.css';
import { VisionCard } from '../../types';

const visionCards: VisionCard[] = [
  {
    title: 'Innovation',
    description: 'Driving forward-thinking solutions that redefine possibilities.',
  },
  {
    title: 'Exploration',
    description: 'Venturing into uncharted territories to uncover new potentials.',
  },
  {
    title: 'Transformation',
    description: 'Shaping the future by transforming ideas into reality.',
  },
];

export const Vision: React.FC = () => {
  return (
    <section id="vision" className={styles.vision}>
      <div className={styles.container}>
        <h2>Our Vision Beyond the Horizon</h2>
        <div className={styles.visionCards}>
          {visionCards.map((card, index) => (
            <article key={index} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
