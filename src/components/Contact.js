// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({ 
      ...formState, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g. API call, Formspree, etc.)
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            value={formState.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            value={formState.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formState.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
