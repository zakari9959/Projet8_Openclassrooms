import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <a href="#portfolio">
      <strong>Portfolio</strong>
    </a>
    <a href="#skills">
      <strong>Compétences</strong>
    </a>
    <a href="#contact">
      <strong>Contact</strong>
    </a>
    <a href="#about">
      <strong>À propos</strong>
    </a>
  </nav>
);
export default Navbar;
