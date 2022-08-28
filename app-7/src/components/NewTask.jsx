import React, { useState } from 'react';

const NewTask = (props) => {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const clickHandler = () => {
        props.setList([...props.list, input])
    };



    return (
        <div>
            <input onChange={inputHandler} type='text' placeholder='enter to-do' />
            <button onClick={clickHandler}>add</button>
        </div>
    )
};

export default NewTask;