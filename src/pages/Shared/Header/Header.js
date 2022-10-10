import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Todo List</h1>
            <ul style={{display: 'flex'}}>
                <li style={{paddingRight: '10px'}}><Link to="/todo">To-Dos</Link></li>
                <li style={{paddingRight: '10px'}}><Link to="/createToDo">New Todo</Link></li>
                <li><Link to="/">SignOut</Link></li>
            </ul>
        </div>
    );
};

export default Header;