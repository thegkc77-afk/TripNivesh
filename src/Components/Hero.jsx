import React from 'react';
import GoaImage from '../assets/Goa.webp'

const Hero = () => {
  return (
    <section className="hero" style={{ paddingTop: '100px' }}>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">India's First Travel Saving Platform</div>
          <h1>
            Don't just dream.
            <span className="highlight">Save for it.</span>
          </h1>
          <p className="hero-desc">
            Plan your perfect trip, save a little every month — and travel completely debt-free. No EMI, no credit card stress.
          </p>
          <div className="hero-btns">
            <a href="#" className="btn-primary">Start Saving Now →</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">₹0</span><span className="stat-label">No hidden fees</span></div>
            <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Debt-free travel</span></div>
            <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Destinations</span></div>
          </div>
        </div>
        <div className="hero-card-wrap">
          {/* <div className="float-badge">✦ Goal 33% Complete!</div> */}
          <div className="hero-img-card">
            <div className="hero-img"><img src={GoaImage} alt=" Goa Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="hero-card-body">
              <div className="hero-card-title">Goa Trip 🌴</div>
              <div className="hero-card-row">
                <span className="hero-card-label">Total Cost</span>
                <span className="hero-card-val">₹30,000</span>
              </div>
              <div className="progress-wrap">
                <div className="progress-label"><span>Saved: ₹10,000</span><span>33%</span></div>
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
              <div className="hero-card-sip">
                <div><span className="sip-label">Monthly saving</span><span className="sip-val">₹5,000</span></div>
                <div style={{ textAlign: 'right' }}><span className="sip-label">Remaining</span><span style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>₹20,000</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
