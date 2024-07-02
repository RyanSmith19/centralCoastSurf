import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Get in touch with us to schedule your surfing lessons.</p>
      <p>Call or Text Today!</p>
      <div className="contact-details">
        <div className="phone-number">
          <a href="tel:8056021349">
            <i className="fas fa-phone"></i>
            (805) 602-1349
          </a>
        </div>
        <div className="email-address">
          <a href="mailto:info@surfschool.com">
            <i className="fas fa-envelope"></i>
            info@surfschool.com
          </a>
        </div>
        <div className="social-media">
          {/* <a href="https://www.facebook.com/surfschool" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/surfschool" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/surfschool" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
