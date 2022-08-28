import React, { useState } from 'react';

const TodoList = (props) => {

    const listDisplay = props.todos.map(todo => <h3>{todo}</h3>)
    return (
        <div>
            {listDisplay}
        </div>
    )
};

export default TodoList;