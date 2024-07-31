import React, { useState, useEffect } from 'react';

const PetCare = () => {
  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(0);

  useEffect(() => {
    const savedHunger = localStorage.getItem('hunger');
    const savedHappiness = localStorage.getItem('happiness');
    if (savedHunger !== null) setHunger(parseInt(savedHunger, 10));
    if (savedHappiness !== null) setHappiness(parseInt(savedHappiness, 10));
  }, []);

  const handleFeed = () => {
    const newHunger = Math.max(hunger - 1, 0); // Decrease hunger but not below 0
    setHunger(newHunger);
    localStorage.setItem('hunger', newHunger);
    alert('You have fed your pet!');
  };

  const handlePlay = () => {
    const newHappiness = Math.min(happiness + 1, 10); // Increase happiness but not above 10
    setHappiness(newHappiness);
    localStorage.setItem('happiness', newHappiness);
    alert('You have played with your pet!');
  };

  return (
    <div className="pet-care-container">
      <h2>Take Care of Your Pet</h2>
      <div>
        <p>Hunger Level: {hunger}</p>
        <p>Happiness Level: {happiness}</p>
      </div>
      <button onClick={handleFeed}>Feed</button>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

module.export = PetCare;


