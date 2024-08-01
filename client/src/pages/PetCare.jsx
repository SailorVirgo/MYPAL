import React, { useState, useEffect } from 'react';

const PetCare = () => {
  const [hunger, setHunger] = useState(5); // Initial hunger level (0-10, 0 = full, 10 = very hungry)
  const [happiness, setHappiness] = useState(5); // Initial happiness level (0-10, 0 = sad, 10 = very happy)

  // Load pet's status from localStorage on component mount
  useEffect(() => {
    const savedHunger = localStorage.getItem('hunger');
    const savedHappiness = localStorage.getItem('happiness');
    if (savedHunger !== null) setHunger(parseInt(savedHunger, 10));
    if (savedHappiness !== null) setHappiness(parseInt(savedHappiness, 10));
  }, []);

  // Save pet's status to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('happiness', happiness);
  }, [hunger, happiness]);

  const handleFeed = () => {
    setHunger(prevHunger => Math.max(0, prevHunger - 1)); // Decrease hunger
  };

  const handlePlay = () => {
    setHappiness(prevHappiness => Math.min(10, prevHappiness + 1)); // Increase happiness
  };

  const handleNeglect = () => {
    setHunger(prevHunger => Math.min(10, prevHunger + 1)); // Increase hunger
    setHappiness(prevHappiness => Math.max(0, prevHappiness - 1)); // Decrease happiness
  };

  // Simulate neglect over time
  useEffect(() => {
    const interval = setInterval(handleNeglect, 60000); // Neglect every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Take Care of Your Pet</h2>
      <div>
        <p>Hunger Level: {hunger}/10</p>
        <p>Happiness Level: {happiness}/10</p>
      </div>
      <button onClick={handleFeed}>Feed</button>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default PetCare;
