import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/sections/Hero.module.css';
import { Logo } from '../common/Logo';
import videoPoster from '../../assets/images/video-poster.jpg';

export const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to handle video load event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Function to handle video playing event
  const handleVideoPlaying = () => {
    setIsVideoPlaying(true);
  };

  // Effect to handle initial loading screen
  useEffect(() => {
    // Preload the video if IntersectionObserver is not supported
    const videoElement = document.querySelector('video');
    if (videoElement) {
      // Add event listeners
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      videoElement.addEventListener('playing', handleVideoPlaying);
      
      // Clean up
      return () => {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        videoElement.removeEventListener('playing', handleVideoPlaying);
      };
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoOverlay} />
      
      {/* Video Background with optimized loading */}
      <div className={`${styles.videoContainer} ${isVideoPlaying ? styles.videoPlaying : ''}`}>
        {/* High-quality poster as initial background */}
        <div className={`${styles.posterBackground} ${isVideoPlaying ? styles.hidden : ''}`}></div>
        
        <video
          className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.loaded : ''}`}
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onPlaying={handleVideoPlaying}
        >
          <source src="/assets/videos/neoEye.mp4" type="video/mp4" />
          {/* Fallback message for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>

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