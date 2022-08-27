import React, { useState } from 'react';

const MirrorTextBox = () => {
    const [userInput, setUserInput] = useState('');

    const inputHandler = (event) => {
        setUserInput(event.target.value);
    }


    return (
        <div>
            <input onChange={inputHandler} type='text' />
            <h2>{userInput}</h2>
        </div>
    )
};

export default MirrorTextBox
