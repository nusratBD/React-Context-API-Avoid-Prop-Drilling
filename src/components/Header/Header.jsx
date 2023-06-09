import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/family'>Family</Link>
        </nav>
    );
};

export default Header;