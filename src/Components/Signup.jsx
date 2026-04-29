import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-background">
        <div className="signup-circle-1"></div>
        <div className="signup-circle-2"></div>
      </div>

      <div className="signup-card">
        <Link to="/" className="signup-back">
          <span>&larr;</span> Back to Home
        </Link>

        <div className="signup-header">
          <h2>Create your <span>TripNivesh</span> account</h2>
          <p>Start your journey towards your dream trip</p>
        </div>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Manoj Kumar" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="manoj@gmail.com" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="signup-btn">Create Account</button>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
