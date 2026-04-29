import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo">Trip<span>Nivesh</span></Link>
      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">How It Works</a></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Link to="/signup" className="nav-cta">Sign up</Link>
    </nav>
  );
};

export default Navbar;
