import React, { useEffect } from 'react';
import './Booking.css';

const Booking = ({ fareHarborLink }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fareharbor.com/embeds/script/YOUR_COMPANY/embed/';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="booking">
      <h2>Book Your Surfing Lesson</h2>
      <div className="fareharbor-booking-widget">
        <a href={fareHarborLink} className="fh-button">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Booking;
