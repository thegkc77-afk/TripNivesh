import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './About.css';
import { Link } from 'react-router-dom';
import { FaMountain, FaShieldAlt, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-container">
        {/* Background elements */}
        <div className="about-background">
          <div className="about-circle-1"></div>
          <div className="about-circle-2"></div>
        </div>

        <div className="about-content-wrapper">
          <div className="about-header">
            <h2>Your Journey to <span>Stress-Free</span> Travel Starts Here</h2>
            <p className="about-subtitle">TripNivesh is a simple platform that helps you plan and save for your trips.</p>
          </div>

          <div className="about-grid">
            <div className="about-card glass-effect">
              <div className="about-icon"><FaMountain style={{ color: '#60a5fa' }} /></div>
              <h3>The Problem</h3>
              <p>Most people want to travel but struggle with managing money. We solve this by giving you a clear trip plan and breaking the total cost into small monthly savings.</p>
            </div>

            <div className="about-card glass-effect">
              <div className="about-icon"><FaShieldAlt style={{ color: '#4ade80' }} /></div>
              <h3>Our Solution</h3>
              <p>You don’t need to pay anything on our platform. You save money on your own (bank, UPI, or even cash), and we help you track your progress step by step.</p>
            </div>

            <div className="about-card glass-effect main-goal">
              <div className="about-icon"><FaStar style={{ color: '#fbbf24' }} /></div>
              <h3>Our Goal Is Simple</h3>
              <p>Help you travel without stress, without overspending, and without borrowing.</p>
            </div>
          </div>

          <div className="about-footer-cta">
            <div className="tagline">
              <span>Plan your trip.</span>
              <span className="highlight">Save monthly.</span>
              <span>Travel confidently.</span>
            </div>
            <Link to="/signup" className="btn-primary">Start Planning Now</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
