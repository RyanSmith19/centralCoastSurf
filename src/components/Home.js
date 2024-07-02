import React from 'react';
import './Home.css';

const Home = () => {
  console.log('Home component rendered'); // Debugging log
  return (
    <div className="home">
      <h1>Welcome to Surf School</h1>
      <p>Learn to surf with the best instructors at the best locations.</p>
    </div>
  );
};

export default Home;
