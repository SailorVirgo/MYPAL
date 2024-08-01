import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState('');

  // Load achievements from localStorage on component mount
  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];
    setAchievements(savedAchievements);
  }, []);

  // Save achievements to localStorage when they change
  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  // Handle input change for new achievement
  const handleInputChange = (e) => {
    setNewAchievement(e.target.value);
  };

  // Add new achievement
  const addAchievement = () => {
    if (newAchievement.trim()) {
      setAchievements([...achievements, { text: newAchievement, completed: false }]);
      setNewAchievement('');
    }
  };

  // Remove achievement
  const removeAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  // Toggle achievement completion
  const toggleCompletion = (index) => {
    const updatedAchievements = achievements.map((achievement, i) =>
      i === index ? { ...achievement, completed: !achievement.completed } : achievement
    );
    setAchievements(updatedAchievements);
  };

  return (
    <div>
      <h2>Achievements</h2>
      <input
        type="text"
        value={newAchievement}
        onChange={handleInputChange}
        placeholder="New achievement"
      />
      <button onClick={addAchievement}>Add</button>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index} style={{ textDecoration: achievement.completed ? 'line-through' : 'none' }}>
            {achievement.text}
            <button onClick={() => toggleCompletion(index)}>
              {achievement.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeAchievement(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
