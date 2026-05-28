import React from 'react';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Three project-focused systems with clear product goals, practical
            workflows, and end-to-end implementation.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal">
            <a className="project-media" href="https://github.com/bhavyabhardwaj001/personalized-mental-health-assistant"
              target="_blank" rel="noreferrer" aria-label="View Mental Health Assistant project">
              <img src="/mindease.png" alt="Mental Health Assistant project screenshot" />
            </a>
            <div className="project-card-header">
              <p className="project-index">01</p>
              <h3>Mental Health Assistant (MindEase)</h3>
            </div>
            <p className="project-description">
              A full-stack AI-powered mental health chatbot designed to
              provide real-time emotional support and improve student
              well-being.
            </p>

            <div className="project-block">
              <h4>Tech Stack</h4>
              <div className="inline-stack">
                <span>Python</span>
                <span>Flask</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>SQLite</span>
                <span>NLP (BlenderBot)</span>
                <span>NLTK (VADER)</span>
              </div>
            </div>

            <div className="project-block">
              <h4>Key Features</h4>
              <ul className="feature-list">
                <li>Real-time conversational chatbot using NLP</li>
                <li>Sentiment analysis to detect emotional state</li>
                <li>Mood tracking and journaling system</li>
                <li>Personalized tips and mental health resources</li>
                <li>Secure user data storage and session handling</li>
              </ul>
            </div>

            <div className="project-role">
              <h4>My Role</h4>
              <p>
                Developed the complete system including frontend interface,
                backend APIs, NLP integration, and database management.
              </p>
            </div>

            <div className="project-actions">
              <a className="project-link" href="https://github.com/bhavyabhardwaj001/personalized-mental-health-assistant"
                target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a className="project-link project-link-secondary" href="https://mindease-2id2.onrender.com/" target="_blank"
                rel="noreferrer">
                <span>Live Demo</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </article>

          <article className="project-card reveal">
            <a className="project-media" href="https://github.com/bhavyabhardwaj001/student-activity-hub" target="_blank"
              rel="noreferrer" aria-label="View Student Activity Platform project">
              <img src="/sah.png" alt="Student Activity Platform project screenshot" />
            </a>
            <div className="project-card-header">
              <p className="project-index">02</p>
              <h3>Student Activity Platform</h3>
            </div>
            <p className="project-description">
              A centralized full-stack platform that streamlines event
              management and improves student engagement across campus.
            </p>

            <div className="project-block">
              <h4>Tech Stack</h4>
              <div className="inline-stack">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="project-block">
              <h4>Key Features</h4>
              <ul className="feature-list">
                <li>Centralized event discovery and registration</li>
                <li>Role-based access system (Student, Admin, Club)</li>
                <li>Personalized dashboard for tracking participation</li>
                <li>Search and filtering system for events</li>
                <li>Secure authentication using JWT</li>
              </ul>
            </div>

            <div className="project-role">
              <h4>My Role</h4>
              <p>
                Built the complete full-stack system including frontend UI,
                backend APIs, authentication, and database architecture.
              </p>
            </div>

            <div className="project-actions">
              <a className="project-link" href="https://github.com/bhavyabhardwaj001/student-activity-hub" target="_blank"
                rel="noreferrer">
                <span>GitHub</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a className="project-link project-link-secondary" href="https://student-activity-hub-two.vercel.app/" target="_blank"
                rel="noreferrer">
                <span>Live Demo</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </article>

          <article className="project-card reveal">
            <a className="project-media project-media-cli" href="https://github.com/bhavyabhardwaj001/esim-tool-manager"
              target="_blank" rel="noreferrer" aria-label="View eSim Automated Tool Manager project">
              <img src="/cli.png" alt="eSim Automated Tool Manager CLI screenshot" />
            </a>
            <div className="project-card-header">
              <p className="project-index">03</p>
              <h3>eSim Automated Tool Manager</h3>
            </div>
            <p className="project-description">
              A Python-based CLI tool that automates installation, updates,
              and management of dependencies for the eSim EDA environment.
            </p>

            <div className="project-block">
              <h4>Tech Stack</h4>
              <div className="inline-stack">
                <span>Python</span>
                <span>CLI</span>
                <span>Linux</span>
                <span>System Automation</span>
              </div>
            </div>

            <div className="project-block">
              <h4>Key Features</h4>
              <ul className="feature-list">
                <li>Install and manage tools like Ngspice and KiCad</li>
                <li>Bulk installation of all required tools</li>
                <li>Version checking and tool status monitoring</li>
                <li>Dependency checking system</li>
                <li>Logging system with timestamps</li>
                <li>Clean CLI interface with colored output</li>
                <li>Linux-based system integration (APT)</li>
              </ul>
            </div>

            <div className="project-role">
              <h4>My Role</h4>
              <p>
                Developed the complete system including CLI interface,
                installation logic, dependency management, and system-level
                automation.
              </p>
            </div>

            <div className="project-actions">
              <span className="project-link project-link-disabled" aria-disabled="true">
                <span>GitHub</span>
                <span>Private Repo</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
