import React from 'react';
import { FaMapMarkedAlt, FaBullseye, FaPiggyBank, FaPlaneDeparture } from 'react-icons/fa';


const HowItWorks = () => {
  return (
    <section className="how">
      <div className="section-label">Simple Process</div>
      <h2 className="section-title">From Dream to <span>Departure</span></h2>
      <p className="section-sub">Follow 4 simple steps — no loans, no stress, just disciplined saving.</p>
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-num">01</div>
          <span className="step-icon"><FaMapMarkedAlt /></span>
          <div className="step-title">Plan Your Trip</div>
          <p className="step-desc">Browse destinations and pick your dream trip. See the full itinerary and cost breakdown.</p>
        </div>
        <div className="step-card">
          <div className="step-num">02</div>
          <span className="step-icon"><FaBullseye /></span>
          <div className="step-title">Set Saving Goal</div>
          <p className="step-desc">Choose how many months you want to save — 3, 6, 9 or 12. We calculate your monthly amount.</p>
        </div>
        <div className="step-card">
          <div className="step-num">03</div>
          <span className="step-icon"><FaPiggyBank /></span>
          <div className="step-title">Save Monthly</div>
          <p className="step-desc">Save a small amount every month. Track your progress. Confirm each payment easily.</p>
        </div>
        <div className="step-card">
          <div className="step-num">04</div>
          <span className="step-icon"><FaPlaneDeparture /></span>
          <div className="step-title">Travel Debt-Free</div>
          <p className="step-desc">Once your goal is complete, book your trip. No EMI, no loans, just pure enjoyment!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
