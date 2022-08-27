import React, { useState } from 'react';

const RenderImg = (props) => {
    const imgSrc = props.imgSrc;

    return (
        <div>
            <img src={imgSrc} alt='Rick Astley' />
        </div>
    )
}

export default RenderImg;