import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-text'> <i className="fa-solid fa-dumbbell"></i> <span>Exercise Active club</span> </h1>
            <p>Select today’s exercise</p>
        </div>
    );
};

export default Header;