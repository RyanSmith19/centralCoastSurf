import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Services</h2>
      <ul className="services-list">
        <li>All Inclusive Surfing Lessons: $60.00 per person (2-Hr. Board/Wetsuit Included) - Ages 6 and up</li>
        <li>Your Own Private Group Lesson: $75.00 per person (2-Hr. Board/Wetsuit Included) - Ages 6 and up, min 3 per group</li>
        <li>Private 1on1 Lesson: $85.00 per person (2-Hr. Board/Wetsuit Included) - Ages 6 and up</li>
        <li>Summer Camps: Start June 8th every year and run every week Monday-Friday 8:30am to 12:30pm till September 5th (Board and Wetsuit Included ages 6-up)</li>
        <li>Rentals: Standard Board $20.00 (2 Hr), Wetsuit $10.00 (2 Hr)</li>
      </ul>
      <div className="cta-buttons">
        <a href="/booking" className="cta-button">Book Online Now</a>
      </div>
    </div>
  );
};

export default Services;
