import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const headline = "Building AI-powered systems for real student and developer workflows.";
  

  const nameVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', letterSpacing: '-0.05em' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)', 
      letterSpacing: '0.05em',
      transition: { duration: 1.2, ease: 'easeOut' }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -50, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100,
      }
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p 
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="eyebrow hero-name"
          >
            Bhavya Bhardwaj
          </motion.p>
          
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ perspective: 1000 }}
          >
            {headline.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden', paddingBottom: '0.1em' }}>
                <motion.span variants={wordVariants} style={{ display: 'inline-block', transformOrigin: 'bottom' }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            CSE student, FOSSEE intern, and developer focused on practical product engineering.
          </motion.h2>
          
          <motion.div 
            className="status-strip"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
          >
            <span className="status-dot" aria-hidden="true"></span>
            System Online &middot; AI + Full-stack &middot; Open to projects
          </motion.div>
          
          <motion.div 
            className="proof-chips small-badges" aria-label="Portfolio highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5, staggerChildren: 0.1 }}
          >
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 }}>MindEase AI Assistant</motion.span>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }}>Student Activity Platform</motion.span>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>eSim Automation Toolkit</motion.span>
          </motion.div>

          <motion.div 
            className="hero-actions" aria-label="Hero links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <a className="btn btn-primary" href="#projects">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
              View Projects
            </a>
            <a className="btn btn-secondary" href="https://github.com/bhavyabhardwaj001" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual" aria-label="Identity and Stack Card"
          initial={{ opacity: 0, x: 30, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 1.0, duration: 1.2, type: 'spring' }}
        >
          <div className="proof-card">
            <div className="proof-header">
              <h3>BHAVYA BHARDWAJ</h3>
              <p>Full-stack Developer<br/>AI + Product Systems</p>
            </div>
            
            <div className="proof-section">
              <span className="proof-label">Currently</span>
              <p className="proof-live">
                <span className="proof-dot"></span>
                FOSSEE Intern @ IIT Bombay
              </p>
            </div>
            
            <div className="proof-section">
              <span className="proof-label">Building</span>
              <ul className="proof-list">
                <li>MindEase AI</li>
                <li>Student Activity Platform</li>
                <li>eSim Automation Toolkit</li>
              </ul>
            </div>
            
            <div className="proof-section proof-stack">
              <span className="proof-label">Stack</span>
              <div className="stack-tags">
                <span>React</span>
                <span>Flask</span>
                <span>Python</span>
                <span>JS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
