import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Reusing the styles from Signup page

const Signin = () => {
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
          <h2>Welcome <span>back</span></h2>
          <p>Sign in to continue your trip savings journey</p>
        </div>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="manoj@gmail.com" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="signup-btn">Sign in</button>
        </form>

        <div className="signup-footer">
          <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
