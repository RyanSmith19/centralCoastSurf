import React from 'react';
import './Services.css';

const Services = ({ fareHarborLink }) => {
  return (
    <div className="services">
      <h2>Services</h2>
      <ul className="services-list">
        <li>Beginner Lessons</li>
        <li>Intermediate Coaching</li>
        <li>Advanced Surf Tours</li>
        <li>Group Sessions</li>
        <li>Private Lessons</li>
      </ul>
      <p>Our comprehensive range of services ensures that every aspect of your surfing experience is covered.</p>
      <a href={fareHarborLink} target="_blank" rel="noopener noreferrer">
        Book Now
      </a>
    </div>
  );
};

export default Services;
