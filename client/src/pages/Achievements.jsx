import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    { id: 1, title: 'First Adoption', description: 'Adopt your first pet.' },
    { id: 2, title: 'Healthy Pet', description: 'Keep your pet healthy for 30 days.' },
    // we can add more achievements here
  ];

  return (
    <div className="achievements-container">
      <h1>Achievements</h1>
      <ul>
        {achievements.map(achievement => (
          <li key={achievement.id}>
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


module.export = Achievements;
