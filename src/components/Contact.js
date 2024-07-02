import React from 'react';
import './Contact.css';

const Contact = () => {
  const phoneNumber = '(805) 123-4567';
  const phoneLink = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
  const emailAddress = 'info@surfschool.com';
  const emailLink = `mailto:${emailAddress}`;
  const facebookLink = 'https://www.facebook.com/surfschool';

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Get in touch with us to schedule your surfing lessons. We offer flexible scheduling options to accommodate your busy lifestyle.</p>
      <p>Call or Text Today!</p>
      <div className="contact-details">
        <div className="phone-number">
          <a href={phoneLink}>
            <i className="fas fa-phone"></i>
            {phoneNumber}
          </a>
        </div>
        <div className="email-address">
          <a href={emailLink}>
            <i className="fas fa-envelope"></i>
            {emailAddress}
          </a>
        </div>
        <div className="social-media">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
