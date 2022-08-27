import React, { useState } from 'react';

const FilterArr = () => {
    const [arr, setArr] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']);
    const [filter, setFilter] = useState('');

    const filterInput = (event) => {
        setFilter(event.target.value)
    }

    const displayHandler = arr.filter((element, index) => {
        return element.includes(filter);
    })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })


    return (
        <div>
            <input onChange={filterInput} type='text' />
            <div>{displayHandler}</div>
        </div>
    )
}

export default FilterArr