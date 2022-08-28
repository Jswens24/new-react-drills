import React, { useState } from 'react';
import NewTask from './NewTask';

const List = () => {
    const [list, setList] = useState(['React Homework', 'Wash the dog']);

    const listDisplay = list.map(todo => <h3>{todo}</h3>)

    return (
        <div>
            <NewTask list={list} setList={setList} />
            {listDisplay}
        </div>
    )
};

export default List;