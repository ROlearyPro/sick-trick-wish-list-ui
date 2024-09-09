import React, { useState } from "react";
function NewTrick(){

    const [nameInput, setNameInput] = useState('');
    const [stanceInput, setStanceInput] = useState('');
    const [obstacleInput, setObstacleInput] = useState('');
    const [tutorialInput, setTutorialInput] = useState('');
    
const handleReset = (e) =>{
    e.preventDefault();
    return;
}

  const handleNameInput = (e) => {
    setNameInput(() => e.target.value);
  };
  const handleObstacleInput = (e) => {
    setObstacleInput(() => e.target.value);
  };


  const handleStanceInput = (e) => {
    setStanceInput(() => e.target.value);
  };


  const handleTutorialInput = (e) => {
    setTutorialnput(() => e.target.value);
  };

const TrickInput = (stance, name, obstacle, tutorial)=>{


    return (
       <form onSubmit={handleReset}>
        <input
        type="text"
        placeholder="name"
        className="nameInput"
        value={nameInput}
        onChange={handleNameInput}
      />
    <select   onChange={handleStanceInput}>
      <option value="">choose Stance</option>
      <option value="Regular">Regular</option>
      <option value="Switch">Switch</option>
    </select>
      <input
        type="text"
        placeholder="obstacle"
        className="obstacleInput"
        value={obstacleInput}
        onChange={handleObstacleInput}
      />
      <input
        type="text"
        placeholder="tutorial"
        className="tutorialInput"
        value={tutorialInput}
        onChange={handleTutorialInput}
      />
      </form>

    )
}}