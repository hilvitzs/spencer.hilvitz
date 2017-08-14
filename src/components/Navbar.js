import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <ul className='navbar'>
      <NavLink to='/portfolio'><li className='portfolio'><span>PORTFOLIO</span></li></NavLink>
      <NavLink to='/contact'><li className='contact'><span>CONTACT ME</span></li></NavLink>
      <NavLink to='/about'><li className='about'><span>ABOUT ME</span></li></NavLink>
      <NavLink to='/resume'><li className='resume'><span>RESUME</span></li></NavLink>
    </ul>
  );
};
