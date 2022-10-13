import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/signup'>
                    <li>Signup</li>
                </Link>
                <Link to='/details'>
                    <li>Details</li>
                </Link>
            </ul>
        </nav>
    )
};

export default Header;