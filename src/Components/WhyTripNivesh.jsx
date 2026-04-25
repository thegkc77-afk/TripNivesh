import React from 'react';
import { FaCreditCard, FaChartBar, FaBullseye, FaLock, FaPlaneDeparture, FaGlobeAsia } from 'react-icons/fa';

const WhyTripNivesh = () => {
  return (
    <section className="why">
      <div className="section-label">Why Us</div>
      <h2 className="section-title">Why Choose <span>TripNivesh?</span></h2>
      <p className="section-sub">We're not just another travel app. We help you actually get there.</p>
      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon"><FaCreditCard /></div>
          <div className="why-title">No Loans, No Debt</div>
          <p className="why-desc">Save before you travel. No EMI, no credit card bills after your trip. Pure stress-free enjoyment.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><FaChartBar /></div>
          <div className="why-title">Simple Monthly Saving</div>
          <p className="why-desc">Like a SIP for your trip — save a small amount every month. We track your progress automatically.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><FaBullseye /></div>
          <div className="why-title">Goal-Based Planning</div>
          <p className="why-desc">See your dream trip getting closer every month. Visual progress bar keeps you motivated.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><FaLock /></div>
          <div className="why-title">Your Money Is Safe</div>
          <p className="why-desc">We never touch your money. You save in your own bank account. We only help you track.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><FaPlaneDeparture /></div>
          <div className="why-title">Travel Stress-Free</div>
          <p className="why-desc">When your goal is complete, you're ready to travel — with full budget in hand. No surprises.</p>
        </div>
        <div className="why-card">
          <div className="why-icon"><FaGlobeAsia /></div>
          <div className="why-title">Made for Indians</div>
          <p className="why-desc">Designed for middle-class Indian travelers who dream big but want to spend smart.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyTripNivesh;
