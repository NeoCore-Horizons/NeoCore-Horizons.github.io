import React from 'react';
import styles from '../../styles/components/sections/Services.module.css';
import { ServiceCard } from '../../types';

const serviceCards: ServiceCard[] = [
  {
    title: 'AI & Data Consulting',
    description: 'Helping organizations make sense of data and leverage AI for real-world impact.',
    icon: 'data'
  },
  {
    title: 'Web Platforms & Online Services',
    description: 'Designing and building modern websites and web apps to showcase brands and streamline operations.',
    icon: 'web'
  },
  {
    title: 'Mobile & App Development',
    description: 'Turning ideas into functional smartphone and tablet apps that meet users where they are.',
    icon: 'mobile'
  },
  {
    title: 'AI-Powered Agents',
    description: 'Creating smart digital assistants and chatbots that interact with customers in real time.',
    icon: 'agent'
  },
  {
    title: 'Workflow Automation',
    description: 'Freeing up valuable time by automating repetitive tasks and processes.',
    icon: 'automation'
  },
  {
    title: 'R&D for Future Tech',
    description: 'Exploring cutting-edge technologies to keep our clients ahead of the innovation curve.',
    icon: 'research'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <p className={styles.sectionIntro}>
          Leveraging cutting-edge technologies to deliver transformative solutions for your business.
        </p>
        <div className={styles.serviceCards}>
          {serviceCards.map((card, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <div className={`${styles.icon} ${styles[card.icon]}`}></div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};