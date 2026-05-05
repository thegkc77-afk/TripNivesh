import React, { useState, useEffect } from 'react';
import {
  FaChartBar, FaCalculator, FaInfoCircle, FaGift,
  FaShieldAlt, FaBan, FaTimes, FaLandmark,
  FaMoneyBillWave, FaCoins, FaGlassCheers
} from 'react-icons/fa';
import './SmartCompare.css';

const SmartCompare = () => {
  const [tripCost, setTripCost] = useState(50000);
  const [tenure, setTenure] = useState(6);
  const [interest, setInterest] = useState(2.5);
  const [reward, setReward] = useState(5);

  const [loanEmi, setLoanEmi] = useState(0);
  const [totalLoanPaid, setTotalLoanPaid] = useState(0);
  const [extraPaid, setExtraPaid] = useState(0);

  const [monthlySaving, setMonthlySaving] = useState(0);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [effectiveCost, setEffectiveCost] = useState(0);
  const [youSave, setYouSave] = useState(0);
  const [savePercentage, setSavePercentage] = useState(0);

  useEffect(() => {
    // Loan Calculation
    const r = (interest * 12) / 100 / 12; // monthly interest rate
    const n = tenure;
    const P = tripCost;

    let emi = 0;
    if (r > 0) {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      emi = P / n;
    }

    const totalLoan = emi * n;
    const interestPaid = totalLoan - P;

    setLoanEmi(Math.round(emi));
    setTotalLoanPaid(Math.round(totalLoan));
    setExtraPaid(Math.round(interestPaid));

    // Saving Calculation
    const savingPerMonth = P / n;
    const rewardVal = (P * reward) / 100;
    const effective = P - rewardVal;

    setMonthlySaving(Math.round(savingPerMonth));
    setRewardAmount(Math.round(rewardVal));
    setEffectiveCost(Math.round(effective));

    // You Save
    const totalSavedVsLoan = totalLoan - effective;
    const pct = (totalSavedVsLoan / totalLoan) * 100;

    setYouSave(Math.round(totalSavedVsLoan));
    setSavePercentage(pct.toFixed(1));

  }, [tripCost, tenure, interest, reward]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <section className="calc-section">
      <div className="calc-inner">
        <div className="calc-header">
          <div className="section-badge" style={{ margin: '0 auto 16px' }}><FaChartBar style={{marginRight: '6px'}}/> Smart Comparison</div>
          <h2 className="section-title" style={{ textAlign: 'center', color: 'white' }}>See How Much You Save with <span>TripNivesh</span></h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>Compare saving with TripNivesh vs taking a loan for your trip</p>
        </div>

        <div className="calc-grid">
          {/* LEFT: Inputs */}
          <div className="calc-inputs">
            <div className="calc-input-title"><FaCalculator /> Enter Your Trip Details</div>

            {/* Trip Cost */}
            <div className="calc-field">
              <div className="calc-field-top">
                <span className="calc-field-label">1. Trip Cost</span>
                <span className="calc-field-val" id="tripCostVal">{formatCurrency(tripCost)}</span>
              </div>
              <input type="range" className="calc-range" id="tripCost" min="10000" max="500000" step="5000" value={tripCost} onChange={(e) => setTripCost(Number(e.target.value))} />
              <div className="calc-range-labels"><span>₹10,000</span><span>₹5,00,000</span></div>
            </div>

            {/* Tenure */}
            <div className="calc-field">
              <div className="calc-field-top">
                <span className="calc-field-label">2. Saving / Loan Duration</span>
              </div>
              <select className="calc-select" id="tenure" value={tenure} onChange={(e) => setTenure(Number(e.target.value))}>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="9">9 months</option>
                <option value="12">12 months</option>
              </select>
            </div>

            {/* Loan Interest */}
            <div className="calc-field">
              <div className="calc-field-top">
                <span className="calc-field-label" style={{display: 'flex', alignItems: 'center'}}>3. Loan Interest (per month) <FaInfoCircle style={{marginLeft: '6px', color: 'rgba(255,255,255,0.4)'}}/></span>
                <span className="calc-field-val" id="interestVal">{interest}%</span>
              </div>
              <input type="range" className="calc-range" id="interest" min="1" max="5" step="0.5" value={interest} onChange={(e) => setInterest(Number(e.target.value))} />
              <div className="calc-range-labels"><span>1%</span><span>5%</span></div>
            </div>

            {/* Travel Reward */}
            <div className="calc-field">
              <div className="calc-field-top">
                <span className="calc-field-label" style={{display: 'flex', alignItems: 'center'}}>4. TripNivesh Travel Reward <FaInfoCircle style={{marginLeft: '6px', color: 'rgba(255,255,255,0.4)'}}/></span>
                <span className="calc-field-val" id="rewardVal">{reward}%</span>
              </div>
              <input type="range" className="calc-range" id="reward" min="2" max="10" step="1" value={reward} onChange={(e) => setReward(Number(e.target.value))} />
              <div className="calc-range-labels"><span>2%</span><span>10%</span></div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaGift style={{color: '#C4F135'}}/> Travel credits usable only on TripNivesh bookings</div>
            </div>

            <button className="calc-btn"><FaChartBar /> Calculate Savings</button>

            <div className="calc-trust-note">
              <div className="calc-trust-item"><FaShieldAlt style={{color: '#60A5FA'}}/> 100% Secure</div>
              <div className="calc-trust-item"><FaBan style={{color: '#F87171'}}/> No hidden charges</div>
              <div className="calc-trust-item"><FaTimes style={{color: '#F87171'}}/> Cancel anytime</div>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="calc-results">

            {/* Loan Card */}
            <div className="result-card loan">
              <div className="result-card-header">
                <div className="result-card-icon icon-red" style={{ background: '#fff', color: '#ef4444' }}><FaLandmark /></div>
                <div className="result-card-title">If You Take Loan</div>
              </div>
              <div className="result-row"><span className="result-label">Trip Cost</span><span className="result-val">{formatCurrency(tripCost)}</span></div>
              <div className="result-row"><span className="result-label">Loan Tenure</span><span className="result-val">{tenure} months</span></div>
              <div className="result-row"><span className="result-label">Monthly EMI (approx.)</span><span className="result-val">{formatCurrency(loanEmi)}</span></div>
              <div className="result-row"><span className="result-label">Total Paid</span><span className="result-val red big">{formatCurrency(totalLoanPaid)}</span></div>
              <div className="result-highlight">
                <span className="result-highlight-label"><FaMoneyBillWave style={{color: '#F87171', marginRight: '6px'}}/> Extra Paid (Interest)</span>
                <span className="result-highlight-val red">+ {formatCurrency(extraPaid)}</span>
              </div>
            </div>

            {/* Saving Card */}
            <div className="result-card saving">
              <div className="result-card-header">
                <div className="result-card-icon icon-green-bg" style={{ background: '#fff', color: '#22c55e' }}><FaCoins /></div>
                <div className="result-card-title">If You Save with TripNivesh</div>
              </div>
              <div className="result-row"><span className="result-label">Total Saved</span><span className="result-val">{formatCurrency(tripCost)}</span></div>
              <div className="result-row"><span className="result-label">Monthly Saving</span><span className="result-val green">{formatCurrency(monthlySaving)}/mo</span></div>
              <div className="result-row"><span className="result-label">Travel Reward ({reward}%)</span><span className="result-val green">- {formatCurrency(rewardAmount)}</span></div>
              <div className="result-row"><span className="result-label">Effective Trip Cost</span><span className="result-val green big">{formatCurrency(effectiveCost)}</span></div>
              <div className="result-highlight green-bg">
                <span className="result-highlight-label" style={{display: 'flex', alignItems: 'center'}}><FaGift style={{color: '#22c55e', marginRight: '6px'}}/> Travel reward usable only on TripNivesh bookings</span>
              </div>
            </div>

            {/* You Save */}
            <div className="you-save-card">
              <div className="you-save-emoji" style={{color: '#C4F135'}}><FaMoneyBillWave /></div>
              <div className="you-save-right">
                <div className="you-save-label">By saving instead of taking a loan</div>
                <div className="you-save-amount">
                  <span>{formatCurrency(youSave)}</span>
                  <span className="you-save-badge">{savePercentage}%</span>
                </div>
                <div className="you-save-sub" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>You Save this much with TripNivesh! <FaGlassCheers style={{color: '#FBBF24'}}/></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartCompare;
