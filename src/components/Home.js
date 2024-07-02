import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
