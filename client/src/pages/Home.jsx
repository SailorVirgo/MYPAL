import React from 'react';
import { Link } from 'react-router-dom';
import './VirtualPlayground.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Virtual Pet Simulator</h1>
        <p>Your one-stop destination for virtual pet care!</p>
      </header>
      <nav className="home-nav">
        <ul>
          <li><Link to="/pet-status">Pet Status</Link></li>
          <li><Link to="/pet-care">Pet Care</Link></li>
          <li><Link to="/adopt-pet">Adopt Pet</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
        </ul>
      </nav>
      <section className="featured-pet">
        <h2>Your Featured Pet</h2>
        <div className="pet-details">
          <img src="path/to/featured-pet-image.jpg" alt="Featured Pet" />
          <div className="pet-info">
            <h3>Pet Name</h3>
            <p>Age: X</p>
            <p>Health: Good</p>
            <p>Happiness: High</p>
          </div>
        </div>
      </section>
      <section className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Played with Pet</li>
          <li>Fed Pet</li>
          <li>Took Pet to the Vet</li>
        </ul>
      </section>
      <footer className="home-footer">
        <div className="user-profile">
          <p>Logged in as: UserName</p>
          <button>Logout</button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
