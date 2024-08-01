import React, { useState, useEffect } from 'react';

const PetStatus = () => {
  const [status, setStatus] = useState({
    happiness: 100, // Initial happiness level (0-100)
    hunger: 0       // Initial hunger level (0-100)
  });

  // Load pet's status from localStorage on component mount
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('petStatus')) || {
      happiness: 100,
      hunger: 0
    };
    setStatus(savedStatus);
  }, []);

  // Save pet's status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('petStatus', JSON.stringify(status));
  }, [status]);

  // Update pet status periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prevStatus) => {
        const newHappiness = Math.max(0, prevStatus.happiness - 1); // Decrease happiness
        const newHunger = Math.min(100, prevStatus.hunger + 1);     // Increase hunger

        return {
          happiness: newHappiness,
          hunger: newHunger
        };
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Pet Status</h2>
      <p>Happiness: {status.happiness}</p>
      <p>Hunger: {status.hunger}</p>
    </div>
  );
};

export default PetStatus;
