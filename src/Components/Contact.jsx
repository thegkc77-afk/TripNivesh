import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct the WhatsApp message
    const whatsappMessage = `Hi TripNivesh team,\n\nMy name is ${name} (${email}).\n\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Using the phone number from the contact info: 917858965675
    const whatsappUrl = `https://wa.me/917858965675?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title" style={{ color: '#fff' }}>We're Here to <span>Help</span></h2>
      <p className="section-sub">Any questions about saving for your trip? We'll reply right away!</p>
      <div className="contact-grid">
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" placeholder="Your name" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" placeholder="your@email.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input className="form-input" placeholder="How does saving work?" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-input form-textarea" placeholder="Tell us how we can help..." name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="form-submit">Send Message →</button>
        </form>
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
              <div className="contact-item-val">Bihar, India</div>
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
