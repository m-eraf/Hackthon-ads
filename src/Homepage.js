import React from 'react';
import Background from './Background';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <Background />
      <h1>Welcome to my website</h1>
      <p>This is the homepage</p>
    </div>
  );
}

export default Homepage;
