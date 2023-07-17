import React from 'react';
import './Button.css';

const Button = ({ name, orangeColor, wide, clickHandler }) => {
const handleClick = () => {
    clickHandler(name);
};

return (
    <button
        className={`button ${orangeColor ? 'orange' : ''} ${wide ? 'wide' : ''}`}
        onClick={handleClick}
    >
    {name}
    </button>
);
};

export default Button;