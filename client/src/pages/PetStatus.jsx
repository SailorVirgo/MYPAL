import React, { useState, useEffect } from 'react';
import './PetStatus.css';

const PetStatus = () => {
  const pet = {
    name: 'Buddy',
    age: 2,
    health: 'Good',
    // Removed happiness from static data as it is dynamic now
  };

  const [status, setStatus] = useState({
    happiness: 100,
    hunger: 0,
  });

  useEffect(() => {
    const updateStatus = () => {
      setStatus((prevStatus) => ({
        happiness: Math.max(prevStatus.happiness - 1, 0), // Decrease happiness but not below 0
        hunger: Math.min(prevStatus.hunger + 1, 100), // Increase hunger but not above 100
      }));
    };

    const intervalId = setInterval(updateStatus, 5000); // Update status every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="pet-status-container">
      <h1>Pet Status</h1>
      <div className="status-details">
        <p>Name: {pet.name}</p>
        <p>Age: {pet.age}</p>
        <p>Health: {pet.health}</p>
        <p>Happiness: {status.happiness}</p>
        <p>Hunger: {status.hunger}</p>
      </div>
    </div>
  );
};



module.export = PetStatus;
