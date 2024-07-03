import React from 'react';
import './App.css';

const services = [
  {
    title: 'All Inclusive Surfing Lessons',
    details: [
      'Per Person $60.00 (2-Hr. Board/Wetsuit Included)',
      'Ages 6 and up',
      '*Buy 3 Get 1 Free'
    ]
  },
  {
    title: 'Your Own Private Group Lesson',
    details: [
      'Per Person $75.00 (2-Hr. Board/Wetsuit Included)',
      'Ages 6 and up',
      '*Min 3 per group',
      '*Buy 3 Get 1 Free'
    ]
  },
  {
    title: 'Private 1on1 Lesson',
    details: [
      '1-Person $85.00 (2-Hr. Board/Wetsuit Included)',
      'Ages 6 and up',
      '*Buy 3 Get 1 Free'
    ]
  },
  {
    title: 'Surf Times 8am, 10am, 12pm are best.',
    details: [
      '*Best surf lesson is the 8 AM due to local winds in the afternoon more often than not, so book accordingly.',
      '*Once booked you will receive an email with location and further information to help assist you!'
    ]
  },
  {
    title: 'Summer Camps',
    details: [
      'Start June 8th and run every week Monday-Friday 8:30am to 12:30pm till September 5th (Board and Wetsuit Included)',
      '1 Day Camp $100.00',
      '3 Day Camp $300.00',
      '5 Day Camp $400.00',
      '*Buy 3-5 Day Camps Get 1 Week Free'
    ]
  },
  {
    title: 'Rentals',
    details: [
      'Standard Board $20.00 (2 Hr)',
      'Wetsuit $10.00 (2 Hr)',
      '*We sell boards and suits as well. Call and ask about deals.'
    ]
  }
];

const App = () => {
  return (
    <div className="App">
      <section id="home" className="home section">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Central Coast Surf School Logo" className="logo" />
        <h1>Central Coast Surf School</h1>
        <h2>Pismo Beach's Premier Surfing School</h2>
        <p>10 years and counting</p>
        <div className="cta-buttons">
          <a href="/booking" className="cta-button">Book Online Now</a>
          <a href="/gift-cards" className="cta-button">Purchase Gift Cards</a>
        </div>
        <p>
          Central Coast Surf School offers Surf Lessons, Surf Camps, Surf Memberships,
          and Surfboard and Wetsuit Rentals. Book Surf lessons, Surf Camps, Surfboard Rentals
          Online or call (805)602-1349 for Questions. We also offer mobile surfing lessons from
          Pismo Beach to Avila Beach to Morro Bay. Call and ask for the best conditions on where to surf.
        </p>
      </section>
      <section id="services" className="services section">
        <h2>Services</h2>
        <ul className="services-list">
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}</strong>
              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <br />
            </li>
          ))}
        </ul>
        <div className="cta-buttons">
          <a href="/booking" className="cta-button">Book Online Now</a>
        </div>
      </section>
      <section id="contact" className="contact section">
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
          {/* <div className="email-address">
            <a href="mailto:info@surfschool.com">
              <i className="fas fa-envelope"></i>
              info@surfschool.com
            </a>
          </div> */}
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Central Coast Surf School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
