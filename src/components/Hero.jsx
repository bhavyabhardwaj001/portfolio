import React from 'react';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow hero-name">Bhavya Bhardwaj</p>
          <h1>Building AI-powered systems for real student and developer workflows.</h1>
          <h2>
            CSE student, FOSSEE intern, and developer focused on practical product engineering.
          </h2>
          <div className="status-strip">
            <span className="status-dot" aria-hidden="true"></span>
            System Online &middot; AI + Full-stack &middot; Open to projects
          </div>
          <div className="proof-chips small-badges" aria-label="Portfolio highlights">
            <span>MindEase AI Assistant</span>
            <span>Student Activity Platform</span>
            <span>eSim Automation Toolkit</span>
          </div>

          <div className="hero-actions" aria-label="Hero links">
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
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="Identity and Stack Card">
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
        </div>
      </div>
    </section>
  );
}
