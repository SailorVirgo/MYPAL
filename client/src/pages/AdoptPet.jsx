import React, { useState } from 'react';

const AdoptPet = () => {
  const [petName, setPetName] = useState('');

  const handleAdopt = () => {
    // Handle pet adoption logic here
  };

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <input 
        type="text" 
        placeholder="Pet Name" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
      />
      <button onClick={handleAdopt}>Adopt</button>
    </div>
  );
};

export default AdoptPet;
