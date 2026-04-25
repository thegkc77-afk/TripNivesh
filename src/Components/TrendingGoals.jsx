import React from 'react';

const TrendingGoals = () => {
  return (
    <section className="trending">
      <div className="section-label">Trending Now</div>
      <h2 className="section-title" style={{ color: '#fff' }}>Popular <span>Destinations</span></h2>
      <p className="section-sub">Start saving for any of these trips today</p>
      <div className="dest-grid">
        <div className="dest-card">
          <div className="dest-bg dest-bg-1">🏖️</div>
          <div className="dest-gradient"></div>
          <div className="dest-info">
            <span className="dest-days">5 DAYS</span>
            <span className="dest-name">Goa</span>
            <span className="dest-country">India</span>
            <div className="dest-sip">
              <div className="dest-sip-label">Monthly SIP</div>
              <span className="dest-sip-val">₹5,000<span className="dest-sip-mo">/mo</span></span>
            </div>
          </div>
          <div className="dest-overlay"><button className="dest-overlay-btn">Save for This →</button></div>
        </div>
        <div className="dest-card">
          <div className="dest-bg dest-bg-2">🏔️</div>
          <div className="dest-gradient"></div>
          <div className="dest-info">
            <span className="dest-days">7 DAYS</span>
            <span className="dest-name">Kashmir</span>
            <span className="dest-country">India</span>
            <div className="dest-sip">
              <div className="dest-sip-label">Monthly SIP</div>
              <span className="dest-sip-val">₹6,500<span className="dest-sip-mo">/mo</span></span>
            </div>
          </div>
          <div className="dest-overlay"><button className="dest-overlay-btn">Save for This →</button></div>
        </div>
        <div className="dest-card">
          <div className="dest-bg dest-bg-3">🌴</div>
          <div className="dest-gradient"></div>
          <div className="dest-info">
            <span className="dest-days">7 DAYS</span>
            <span className="dest-name">Bali</span>
            <span className="dest-country">Indonesia</span>
            <div className="dest-sip">
              <div className="dest-sip-label">Monthly SIP</div>
              <span className="dest-sip-val">₹12,500<span className="dest-sip-mo">/mo</span></span>
            </div>
          </div>
          <div className="dest-overlay"><button className="dest-overlay-btn">Save for This →</button></div>
        </div>
        <div className="dest-card">
          <div className="dest-bg dest-bg-4">🗼</div>
          <div className="dest-gradient"></div>
          <div className="dest-info">
            <span className="dest-days">6 DAYS</span>
            <span className="dest-name">Paris</span>
            <span className="dest-country">France</span>
            <div className="dest-sip">
              <div className="dest-sip-label">Monthly SIP</div>
              <span className="dest-sip-val">₹24,000<span className="dest-sip-mo">/mo</span></span>
            </div>
          </div>
          <div className="dest-overlay"><button className="dest-overlay-btn">Save for This →</button></div>
        </div>
      </div>
    </section>
  );
};

export default TrendingGoals;
