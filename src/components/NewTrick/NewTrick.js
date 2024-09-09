import React, { useState } from "react";
import Card from '../Card/Card';

function NewTrick(tricks) {

    const [nameInput, setNameInput] = useState('');
    const [stanceInput, setStanceInput] = useState('');
    const [obstacleInput, setObstacleInput] = useState('');
    const [tutorialInput, setTutorialInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        document.querySelector('.addspot').append(JSON.stringify(<div>
            name={nameInput}
            stance={stanceInput}
            obstacle={obstacleInput}
            tutorial={tutorialInput}
            id={4}
        </div>))
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
        setTutorialInput(() => e.target.value);
    };


    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="name"
                    className="nameInput"
                    value={nameInput}
                    onChange={handleNameInput}
                />
                <select onChange={handleStanceInput}>
                    <option value="">choose Stance</option>
                    <option value="Regular">Regular</option>
                    <option value="Switch">Switch</option>
                </select>
                <select onChange={handleObstacleInput}>
                    <option value="">choose Obstacle</option>
                    <option value="Flatground">flatground</option>
                    <option value="Ledge">ledge</option>
                    <option value="Rail">rail</option>
                    <option value="Stairs">stairs</option>
                    <option value="Pool">pool</option>
                </select>
                <input
                    type="text"
                    placeholder="tutorial"
                    className="tutorialInput"
                    value={tutorialInput}
                    onChange={handleTutorialInput}
                />
                <button type={"submit"} className={"sub"}>Submit</button>
            </form>
        </div>
    )
}
export default NewTrick;