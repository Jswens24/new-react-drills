import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(['React Homework', 'Wash the dog']);
  const [input, setInput] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    setTodos([...todos, input]);
  }



  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input onChange={inputHandler} type='text' placeholder='Enter a to-do' />
      <button onClick={clickHandler}>Add</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
