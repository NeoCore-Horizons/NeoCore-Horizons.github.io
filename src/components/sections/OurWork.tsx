// src/components/sections/OurWork.tsx
import React from 'react';
import styles from '../../styles/components/sections/OurWork.module.css';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: 'play-house',
    title: 'The Play House App',
    description: 'An innovative platform offering AI-driven digital companionship. Using advanced Large Language Models and stable diffusion algorithms, users can personalize AI friends in both personality and appearance. The app simulates natural human-like conversations and ensures privacy while adapting to individual communication styles.',
    image: '/assets/images/projects/playBunnyLogo512x512.png',
    technologies: ['Dart', 'Flutter', 'Large Language Models', 'Stable Diffusion', 'Shared GPU APIs'],
    impact: 'Alleviating loneliness by simulating highly empathetic interactions. Future updates promise voice and video features, further enhancing the sense of human connection in the digital era.'
  },
  {
    id: 'carbonx',
    title: 'CarbonX',
    description: 'A full-stack web app implementing IPCC standards for calculating carbon emissions in farming. It collects data on farming practices, outputs an environmental score, and provides certificates. This encourages rewards for farmers while allowing processors to offload carbon footprints responsibly.',
    image: '/assets/images/projects/carbonX-v2-rect-darkMode.svg',
    technologies: ['Django Framework', 'Vue.js', 'JWT', 'Docker'],
    impact: 'Streamlined carbon footprint calculations and certification, promoting sustainable farming and transparent supply chains in the agricultural industry.'
  },
  {
    id: 'agri-trade-summit',
    title: 'Agri Trade Summit',
    description: 'NeoCore Horizons crafted the entire website for the Agri Trade Summit 2025, focusing on a stylish yet streamlined design. From color palettes to custom elements, every detail was polished to ensure an engaging user journey and efficient back-end processes for the summit team.',
    image: '/assets/images/projects/agritradesummit2025.png',
    technologies: ['PHP', 'JSON', 'WordPress (as a base)'],
    impact: 'Enhanced event visibility with a seamless user experience, improving attendee engagement and streamlining the organizational workflow for summit coordinators.'
  },
  {
    id: 'tradeinfo',
    title: 'TradeInfo',
    description: "TradeInfo, offered by Agricolumn, delivers real-time market updates, key indicators, and pricing. NeoCore Horizons modernized the app's entire frontend, improving UX and boosting performance. We also built iOS/Android versions using Flutter and Dart for on-the-go access.",
    image: '/assets/images/projects/Agricolumn_512.png',
    technologies: ['Python', 'PHP', 'Dart', 'Flutter'],
    impact: 'Provided farmers, traders, and stakeholders with instant, reliable market data in a polished interface, driving faster and better-informed decision-making in the agricultural sector.'
  }
];

export const OurWork: React.FC = () => {
  return (
    <section id="our-work" className={styles.ourWork}>
      <div className={styles.container}>
        <h2>Our Impactful Work</h2>
        <p className={styles.sectionIntro}>
          Discover how our cutting-edge innovations are transforming industries and shaping the future.
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                  />
                </div>
              )}
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className={styles.technologiesContainer}>
                    <h4>Technologies</h4>
                    <ul className={styles.technologiesList}>
                      {project.technologies.map((tech, index) => (
                        <li key={index} className={styles.technologyTag}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.impact && (
                  <div className={styles.impactContainer}>
                    <h4>Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};