import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This form is a demo — no data was sent.');
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <SectionHeader
            label="Get in Touch"
            title="We'd Love to Hear From You"
            subtitle="Have questions, feedback, or business inquiries? Drop us a message."
          />
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-content__inner">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us more..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button variant="primary" size="lg" type="submit">
              Send Message
            </Button>
          </form>

          <div className="contact-info">
            <div className="contact-info__card">
              <div className="contact-info__icon">📧</div>
              <h3>Email Us</h3>
              <p>hello@spraylite.com</p>
            </div>
            <div className="contact-info__card">
              <div className="contact-info__icon">📍</div>
              <h3>Based In</h3>
              <p>India</p>
            </div>
            <div className="contact-info__card">
              <div className="contact-info__icon">🛒</div>
              <h3>Shop Online</h3>
              <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
                Amazon India
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
