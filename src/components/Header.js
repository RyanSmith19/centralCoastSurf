import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/services">Services</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        <li className="nav-item"><Link to="/booking">Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
