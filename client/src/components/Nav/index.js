import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <header>
            <div className="nav-wrapper">
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/gallery'>
                    Gallery
                </Link>
            </div>
            <h1>
                <Link to='/'>
                    Kathryn Hansen
                </Link>
            </h1>
            <div>
                <Link to='/contact'>
                    Contact
                </Link>
                <Link to='/events'>
                    Events
                </Link>
                <Link to='/'>
                    Shop
                </Link>
            </div>
        </header>
    );
}

export default Nav;