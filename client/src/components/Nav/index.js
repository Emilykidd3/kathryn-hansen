import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <header>
            <h1>
                <Link to='/'>
                    Kathryn Hansen
                </Link>
            </h1>
        </header>
    );
}

export default Nav;