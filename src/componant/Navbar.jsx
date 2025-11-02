import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <link className="nav-link-custom" to={'/'}>HOME</link>
            </li>
            <li className="nav-item">
              <link className="nav-link-custom" to={'/Portfolio'}>PORTFOLIO</link>
            </li>
            <li className="nav-item">
              <link className="nav-link-custom" to={'/About'}>ABOUT</link>
            </li>
            <li className="nav-item">
              <link className="nav-link-custom" to={'/Contact'}>CONTACT</link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}