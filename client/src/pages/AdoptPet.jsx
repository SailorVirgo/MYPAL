import React, { useState } from 'react';
import './AdoptPet.css';

const AdoptPet = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle pet adoption logic here
    console.log(`Adopted a new pet: ${petName}, Type: ${petType}`);
  };

  return (
    <div className="adopt-pet-container">
      <h1>Adopt a New Pet</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pet Name:
          <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} />
        </label>
        <label>
          Pet Type:
          <select value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            {/* Add more pet types */}
          </select>
        </label>
        <button type="submit">Adopt</button>
      </form>
    </div>
  );
};

export default AdoptPet;
