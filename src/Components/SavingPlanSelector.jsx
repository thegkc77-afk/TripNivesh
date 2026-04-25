import React, { useState } from 'react';

const SavingPlanSelector = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const amounts = ['₹10,000', '₹5,000', '₹3,333', '₹2,500'];
  const months = ['3', '6', '9', '12'];
  const labels = ['FASTEST', '✦ RECOMMENDED', '', 'EASIEST'];

  return (
    <section className="saving-plan">
      <div className="section-label">Core Feature</div>
      <h2 className="section-title">Choose Your <span>Saving Plan</span></h2>
      <p className="section-sub">Pick how many months you want to save. We'll calculate your monthly amount automatically.</p>
      <div className="plan-wrapper">
        <div className="plan-dest-info">
          <div className="plan-dest-icon">🏖️</div>
          <div>
            <span className="plan-dest-name">Goa Trip</span>
            <span className="plan-dest-cost">Total Cost: <strong>₹30,000</strong></span>
          </div>
        </div>
        <span className="plan-label">How many months do you want to save?</span>
        <div className="months-grid">
          {months.map((month, index) => (
            <div 
              key={index}
              className={`month-option ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="month-recommended">{labels[index]}</span>
              <span className="month-num">{month}</span>
              <span className="month-text">Months</span>
              <span className="month-amount">{amounts[index]}/mo</span>
            </div>
          ))}
        </div>
        <div className="plan-summary">
          <div className="plan-summary-row">
            <span className="ps-label">Trip Cost</span>
            <span className="ps-val">₹30,000</span>
          </div>
          <div className="plan-summary-row">
            <span className="ps-label">Saving Duration</span>
            <span className="ps-val">{months[activeIndex]} Months</span>
          </div>
          <div className="plan-summary-row">
            <span className="ps-label">You Save Per Month</span>
            <span className="ps-val big">{amounts[activeIndex]}</span>
          </div>
        </div>
        <button className="plan-cta">🎯 Start Saving Now</button>
        <p className="plan-trust">🔒 Your money stays in your bank. We only track.</p>
      </div>
    </section>
  );
};

export default SavingPlanSelector;
