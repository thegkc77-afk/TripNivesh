import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title" style={{ color: '#fff' }}>We're Here to <span>Help</span></h2>
      <p className="section-sub">Any questions about saving for your trip? We'll reply right away!</p>
      <div className="contact-grid">
        <div className="contact-form-card">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="Your name" type="text" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" placeholder="your@email.com" type="email" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" placeholder="How does saving work?" type="text" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input form-textarea" placeholder="Tell us how we can help..."></textarea>
          </div>
          <button className="form-submit">Send Message →</button>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon"><MdEmail /></div>
            <div>
              <div className="contact-item-label">Email Us</div>
              <div className="contact-item-val">support@tripnivesh.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MdPhone /></div>
            <div>
              <div className="contact-item-label">Call Us</div>
              <div className="contact-item-val">+91 78589 65675</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MdLocationOn /></div>
            <div>
              <div className="contact-item-label">Location</div>
              <div className="contact-item-val">Bhagalpur, Bihar, India</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MdAccessTime /></div>
            <div>
              <div className="contact-item-label">Working Hours</div>
              <div className="contact-item-val">Mon–Fri: 9AM – 6PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
