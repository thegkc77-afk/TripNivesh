import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a className="nav-logo" href="#">Trip<span>Nivesh</span></a>
      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button className="nav-cta">Sign up</button>
    </nav>
  );
};

export default Navbar;
