import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionIntro from '../components/SectionIntro';
import ScrollReveal from '../components/ScrollReveal';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Contact.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for email notification
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '', company: '', email: '', phone: '',
        projectType: '', budget: '', timeline: '', message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Kathputlee Arts & Films</title>
        <meta name="description" content="Get in touch with Kathputlee Arts & Films." />
      </Helmet>
      
      <div className="page-contact fade-in">
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-title">Start A<br/>Conversation</h1>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container">
            <div className="contact-grid">
              
              <ScrollReveal className="contact-info">
                <SectionIntro title="Get in touch" subtitle="Reach Out" />
                
                <div className="info-list">
                  <div className="info-item">
                    <MapPin className="text-primary" />
                    <div>
                      <h4>Studio Location</h4>
                      <p className="text-muted">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Mail className="text-primary" />
                    <div>
                      <h4>Email Us</h4>
                      <p className="text-muted">hello@kathputlee.in</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Phone className="text-primary" />
                    <div>
                      <h4>Call Us</h4>
                      <p className="text-muted">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="contact-form-container" delay={200}>
                {status === 'success' ? (
                  <div className="form-success">
                    <h3>Thank you for reaching out!</h3>
                    <p className="text-muted">We have received your message and will get back to you within 24 hours.</p>
                    <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send another message</button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="projectType">Project Type</label>
                        <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}>
                          <option value="">Select an option</option>
                          <option value="brand-film">Brand Film</option>
                          <option value="tvc">TVC / Commercial</option>
                          <option value="documentary">Documentary</option>
                          <option value="production-service">Production Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="budget">Budget Range</label>
                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
                          <option value="">Select an option</option>
                          <option value="under-10l">Under ₹10L</option>
                          <option value="10l-50l">₹10L - ₹50L</option>
                          <option value="50l-1cr">₹50L - ₹1Cr</option>
                          <option value="above-1cr">Above ₹1Cr</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Details *</label>
                      <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
