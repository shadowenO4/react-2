import React, { useState } from 'react';

export default function Navbar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 76;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setNavbarCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ">
      <div className="container">
        <a 
          className="navbar-brand-custom" 
          href="#page-top" 
          onClick={(e) => { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          START BOOTSTRAP
        </a>
        <button 
          className="navbar-toggler-custom"
          type="button"
          onClick={() => setNavbarCollapsed(!navbarCollapsed)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${!navbarCollapsed ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link-custom" onClick={() => scrollToSection('portfolio')}>PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link-custom" onClick={() => scrollToSection('about')}>ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link-custom" onClick={() => scrollToSection('contact')}>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}