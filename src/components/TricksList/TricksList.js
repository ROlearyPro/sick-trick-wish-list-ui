import './TricksList.css';
import Card from '../Card/Card';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function TricksList({ tricks }) {
    console.log(tricks)
    console.log(tricks[0])
    const cardReturn = tricks.map((trick) => {
        return (
            <div className="cards">
            <Card
                name={trick.name}
                stance={trick.stance}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
                id={trick.id}
            />
            </div>
        )
    })
    return(
        <div>
            {cardReturn}
        </div>
    )
}
export default TricksList;