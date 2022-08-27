import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const clickHandler = () => {
        alert(`Username: ${username} Password: ${password}`)
    }

    return (
        <div>
            <input onChange={usernameHandler} type='text' placeholder='enter username' />
            <input onChange={passwordHandler} type='password' placeholder='enter password' />
            <button onClick={clickHandler}>Login</button>
        </div>
    )
}

export default Login;