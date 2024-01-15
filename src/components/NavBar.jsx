import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

  return (
    <div className='nav'>
      <ul>
        <li>
            <Link to='/home'>Home</Link>
          </li>
        <li>
            <NavLink to='./about'>About</NavLink>
        </li>
        <li>
            <NavLink to='./contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;

