import React, { useState } from 'react';

const ArrayOfStrings = () => {
    const [arr, setArr] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']);

    let displayHandler = arr.map((item, index) => {
        return <h2 key={index}>{item}</h2>
    });


    return (
        <div>
            {displayHandler}
        </div>
    )
};

export default ArrayOfStrings;