import React from 'react';
import styles from '../../styles/components/sections/Hero.module.css';
import { Logo } from '../common/Logo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoOverlay} />
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/video-poster.jpg" // Optional: Add a poster image
      >
        <source src="/assets/videos/neoEye.mp4" type="video/mp4" />
      </video>

      <div className={styles.heroWrapper}>
        <Logo className={styles.heroLogo} />
        <div className={styles.heroContent}>
          <h1>
            <span className={styles.heroTitleLine}>Innovating for Tomorrow,</span>
            <span className={styles.heroTitleLine}>Shaping the Unknown</span>
          </h1>
          <p className={styles.heroSubtitle}>The core of technologies beyond today's horizon.</p>
        </div>
      </div>
    </section>
  );
};
