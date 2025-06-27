// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mblyqybn");

  if (state.succeeded) {
    return (
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p className="thank-you">Thanks for your message! We'll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
