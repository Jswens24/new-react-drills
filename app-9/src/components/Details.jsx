import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Betty from './Betty';
import Kobuk from './Kobuk';

const Details = () => {
    return (
        <div>
            <h3>Select a category</h3>
            <ul>
                <Link to='/details/kobuk'>
                    <li>Kobuk</li>
                </Link>
                <Link to='/details/betty'>
                    <li>Betty</li>
                </Link>
            </ul>
            <Routes>
                <Route path='/kobuk' element={<Kobuk />} />
                <Route path='/betty' element={<Betty />} />
            </Routes>
        </div>
    )
};

export default Details;