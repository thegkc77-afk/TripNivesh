import React, { useState } from 'react';

const ConfirmSaving = () => {
  const [selectedOptions, setSelectedOptions] = useState([0, 1]); // Initially selecting first two options based on original HTML

  const toggleOption = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter(i => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const options = [
    { text: '🏦 Bank Account' },
    { text: '📱 UPI / Wallet' },
    { text: '💵 Cash / Piggy Bank' }
  ];

  return (
    <section className="confirm-section">
      <div className="section-label">Monthly Check-in</div>
      <h2 className="section-title">Confirm Your <span>Saving</span></h2>
      <p className="section-sub">Every month, just confirm you saved. That's it — no bank access needed.</p>
      <div className="confirm-wrapper">
        <div className="confirm-header">
          <h3>Did you save this month? 🎯</h3>
          <p>Goa Trip — Month 2 of 6</p>
        </div>
        <div className="confirm-body">
          <div className="confirm-amount">
            <div className="confirm-amount-label">Amount to save this month</div>
            <div className="confirm-amount-val">₹5,000</div>
          </div>
          <div className="confirm-options-label">Where did you save? (Select all that apply)</div>
          <div className="confirm-options">
            {options.map((opt, index) => {
              const isSelected = selectedOptions.includes(index);
              return (
                <div 
                  key={index} 
                  className={`confirm-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleOption(index)}
                >
                  <div className="confirm-check" style={{ background: isSelected ? 'var(--purple)' : '#E5E7EB' }}>
                    {isSelected ? '✓' : ''}
                  </div>
                  <span className="confirm-opt-text">{opt.text}</span>
                </div>
              );
            })}
          </div>
          <div className="confirm-upload">
            <div className="upload-icon">📸</div>
            <span className="upload-optional">OPTIONAL</span>
            <div className="upload-text">Upload proof screenshot<br/><small style={{ color: '#9CA3AF' }}>Bank balance, UPI transaction, notes</small></div>
          </div>
          <button className="confirm-btn">✅ Confirm — I Saved This Month!</button>
          <p className="confirm-trust">🔒 We don't access your money. This is just for tracking.</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmSaving;
