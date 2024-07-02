import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Central Coast Surf School</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
