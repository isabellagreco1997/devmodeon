import React, { useState } from 'react';
import './styles.css'; // import your CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={`header ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">CODE_WITH_ISA</div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="/home">Home</a>
          <a href="#about-container">About</a>
          {/* <a href="/services">Services</a> */}
          <a href="#about-container">Contact</a>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
      </header>
      {/* Your website's content goes here */}
    </div>
  );
}

export default Header;
