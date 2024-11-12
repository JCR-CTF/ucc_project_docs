import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Documentation-focused hero section
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1>UCC Cyber Range Documentation</h1>
          <p>Complete documentation for Uganda's Cyber Security Training Platform</p>
          <div className={styles.heroSearch}>
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className={styles.searchInput}
              onClick={() => {
                // Trigger Docusaurus search
                const searchButton = document.querySelector('.DocSearch-Button');
                if (searchButton) {
                  searchButton.click();
                }
              }}
              readOnly
            />
            <div className={styles.searchHint}>Press / to search</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Documentation Sections
function DocumentationSections() {
  const sections = [
    {
      title: 'CTFd Platform',
      description: 'Documentation for the Capture The Flag platform, including challenge creation, scoring, and competition management.',
      links: [
        { label: 'Getting Started', url: '/docs/ctfd/introduction' },
        { label: 'Challenge Management', url: '/docs/ctfd/challenges' },
        { label: 'Competition Setup', url: '/docs/ctfd/competitions' }
      ],
      image: 'https://raw.githubusercontent.com/CTFd/CTFd/master/CTFd/themes/core/static/img/logo.png'
    },
    {
      title: 'Learning Management',
      description: 'Guides for the Moodle-based learning platform, covering course management, assessments, and user administration.',
      links: [
        { label: 'Platform Overview', url: '/docs/moodle/overview' },
        { label: 'Course Setup', url: '/docs/moodle/courses' },
        { label: 'User Management', url: '/docs/moodle/users' }
      ],
      image: 'https://www.empowerelearning.com/blog/wp-content/uploads/2023/05/Blog_A-Guide-to-Selecting-the-Right-LMS-1.jpg'
    },
    {
      title: 'Practice Terminal',
      description: 'Documentation for the secure shell environment, including setup, usage, and available tools.',
      links: [
        { label: 'Terminal Access', url: '/docs/shell/access' },
        { label: 'Available Tools', url: '/docs/shell/tools' },
        { label: 'Security Guidelines', url: '/docs/shell/security' }
      ],
      image: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className={styles.docSections}>
      <div className="container">
        <div className={styles.sectionGrid}>
          {sections.map((section, index) => (
            <div key={index} className={styles.docCard}>
              <div className={styles.cardImage}>
                <img src={section.image} alt={section.title} />
              </div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <div className={styles.docLinks}>
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} to={link.url}>{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    {
      name: 'Uganda Communications Commision',
      logo: 'https://www.ucc.co.ug/wp-content/uploads/2023/09/ucc-web-logo.png',
      url: 'https://ucc.co.ug'
    },
    {
      name: 'Uganda National Computer Emergency Response Team /CC',
      logo: 'https://simulations.ug-cert.ug/files/200a4d6e35f12c3dc5a87172a17aa253/UG-CERT-Logo.jpg',
      url: 'https://cert.ug'
    },
   
  ];

  return (
    <section className={styles.partners}>
      <div className="container">
        <h2>Our Partners</h2>
        <p className={styles.partnersSubtitle}>
          Working together to enhance cybersecurity in Uganda
        </p>
        <div className={styles.partnerGrid}>
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.partnerCard}
            >
              <img src={partner.logo} alt={`${partner.name} logo`} />
              <span className={styles.partnerName}>{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickReference() {
  return (
    <section className={styles.quickRef}>
      <div className="container">
        <h2>Quick Reference</h2>
        <div className={styles.quickLinks}>
          <Link to="/docs/category/simulation">🚀 Getting Started</Link>
          <Link to="/docs/faq">❓ FAQ</Link>
          <Link to="/docs/api">🔧 API Reference</Link>
          <Link to="/docs/troubleshooting">🔍 Troubleshooting</Link>
        </div>
      </div>
    </section>
  );
}

// Main Homepage Component
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Documentation for UCC Cyber Range Platform">
      <main className={styles.mainContent}>
        <HeroSection />
        <DocumentationSections />
        <QuickReference />
        <Partners />
      </main>
    </Layout>
  );
}