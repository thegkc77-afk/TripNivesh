import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGift, FaStar, FaBullseye, FaUmbrellaBeach, FaLock,
  FaShieldAlt, FaSuitcaseRolling, FaSmileBeam, FaSyncAlt,
  FaCoins, FaPlane, FaHeadphones, FaHeart, FaCheckCircle,
  FaBan, FaGlobeAsia, FaGlassCheers
} from 'react-icons/fa';
import './WhyChooseTripNivesh.css';

const WhyChooseTripNivesh = () => {
  const navigate = useNavigate();

  return (
    <section className="why-section">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div className="section-badge" style={{ margin: '0 auto 24px' }}>✦ WHY CHOOSE US</div>
        <h2 className="section-title" style={{ textAlign: 'center', color: "white" }}>Why Choose <span>TripNivesh?</span></h2>
        <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '600px' }}>
          We're not just another travel app — we help you plan, save and travel without money worries.
        </p>
      </div>

      <div className="why-grid">
        {/* Card 1 */}
        <div className="why-card">
          <div className="why-card-icon icon-red"><FaGift /></div>
          <div className="why-card-title">
            <span>Make Every Trip Cheaper</span>
            <span className="coming-soon">COMING SOON</span>
          </div>
          <p className="why-card-desc">Earn 2–5% travel rewards on your savings and use them to reduce the cost of your next trip.</p>
          <div className="why-inner-card green" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaStar style={{ color: '#FBBF24' }} /> Rewards are travel credits usable only on TripNivesh bookings
          </div>
        </div>

        {/* Card 2 */}
        <div className="why-card">
          <div className="why-card-icon icon-purple"><FaBullseye /></div>
          <div className="why-card-title">
            <span>Goal-Based Planning</span>
          </div>
          <p className="why-card-desc">Set your dream destination and track progress every month. Stay consistent with a clear saving goal.</p>
          <div className="mini-progress">
            <div className="mini-prog-top">
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Goa Trip <FaUmbrellaBeach style={{ color: '#FBBF24' }} /></span>
              <span style={{ color: '#C4F135', fontWeight: 700 }}>75%</span>
            </div>
            <div className="mini-prog-bar"><div className="mini-prog-fill" style={{ width: '75%' }}></div></div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>₹15,000 / ₹20,000</div>
          </div>
        </div>

        {/* Card 3 */}
        {/* <div className="why-card">
          <div className="why-card-icon icon-orange"><FaLock /></div>
          <div className="why-card-title">
            <span>Your Money, Your Control</span>
          </div>
          <p className="why-card-desc">You save in your own bank account. TripNivesh only helps you plan and track your journey.</p>
          <div className="why-inner-card purple" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaShieldAlt style={{ color: '#60A5FA' }} /> Secure wallet & escrow features coming soon
          </div>
        </div> */}

        {/* Card 4 */}
        <div className="why-card">
          <div className="why-card-icon icon-blue"><FaSuitcaseRolling /></div>
          <div className="why-card-title">
            <span>Travel Without Financial Stress</span>
          </div>
          <p className="why-card-desc">No last-minute money pressure. Travel with your full budget ready and enjoy every moment.</p>
          <div className="why-inner-card yellow" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaSmileBeam style={{ color: '#FBBF24' }} /> No loans. No debt. Just smart planning.
          </div>
        </div>

        {/* Card 5 */}
        <div className="why-card">
          <div className="why-card-icon icon-blue"><FaSyncAlt /></div>
          <div className="why-card-title">
            <span>Save → Travel → Save Again</span>
          </div>
          <p className="why-card-desc">Build a habit of smart travel. Save for one trip, earn rewards, and make your next trip cheaper.</p>
          <div className="save-flow">
            <div className="save-flow-item"><span><FaCoins style={{ color: '#FBBF24' }} /></span>Save</div>
            <span className="save-flow-arrow">→</span>
            <div className="save-flow-item"><span><FaPlane style={{ color: '#60A5FA' }} /></span>Travel</div>
            <span className="save-flow-arrow">→</span>
            <div className="save-flow-item"><span><FaGift style={{ color: '#F87171' }} /></span>Rewards</div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="why-card">
          <div className="why-card-icon icon-teal"><FaHeadphones /></div>
          <div className="why-card-title">
            <span>We're Here to Help</span>
          </div>
          <p className="why-card-desc">From planning to booking, our support team is here to make your trip planning super easy.</p>
          <div className="why-inner-card teal" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaHeart style={{ color: '#4ADE80' }} /> Real people. Real support. Always.
          </div>
        </div>

        {/* Card 7 */}
        <div className="why-card">
          <div className="why-card-icon icon-orange"><FaLock /></div>
          <div className="why-card-title">
            <span>Safe & Secure Saving</span>
          </div>
          <p className="why-card-desc">Your money stays safe while you plan your trip step by step.</p>
          <div className="why-inner-card purple" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaShieldAlt style={{ color: '#60A5FA' }} /> Secure saving systems with trusted partners coming soon
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar-left">
          <span><FaShieldAlt style={{ fontSize: '20px', color: '#60A5FA' }} /></span>
          <span>Built on Trust — Secure, transparent and responsible travel planning for every Indian.</span>
        </div>
        <div className="trust-items">
          <div className="trust-item"><FaCheckCircle style={{ color: '#4ADE80' }} /> 100% Secure</div>
          <div className="trust-item"><FaBan style={{ color: '#F87171' }} /> No Hidden Charges</div>
          <div className="trust-item"><FaLock style={{ color: '#FBBF24' }} /> Privacy First</div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner-left">
          <div className="cta-banner-title">Start your <span style={{ color: '#C4F135' }}>travel savings</span> journey today!</div>
          <div className="cta-banner-sub">Join thousands of smart travelers who save today and travel better tomorrow.</div>
          <div className="cta-banner-sub2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaGlassCheers style={{ color: '#FBBF24' }} /> Join the waitlist and be the first to access <span style={{ color: '#C4F135', fontWeight: 700 }}>exclusive early-bird rewards!</span>
          </div>
        </div>
        <button className="cta-btn" onClick={() => navigate('/signup')}>Sign up now →</button>
      </div>
    </section>
  );
};

export default WhyChooseTripNivesh;
