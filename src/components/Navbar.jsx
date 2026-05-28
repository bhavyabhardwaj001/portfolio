import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header" id="siteHeader">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Bhavya Bhardwaj home">
          <span>BB</span><span>.</span>
        </a>

        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          type="button" 
          aria-label="Open navigation menu" 
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
