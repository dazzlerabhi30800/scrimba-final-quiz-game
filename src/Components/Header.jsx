import React from 'react';
import './Main.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header--container">
            <div className="text--wrapper">
                <h1 className="heading">Quizzical</h1>
                <p className="desc">This is the quiz that will test you IQ!</p>
                <Link to="/about" className='btn'>Start Quiz</Link>
            </div>
            <div className="top-shape"></div>
            <div className="bottom-shape"></div>
        </div>
    )
}

export default Header;