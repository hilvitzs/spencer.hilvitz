import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <ul className='navbar'>
      <NavLink to='/portfolio'><li><span>PORTFOLIO</span></li></NavLink>
      <NavLink to='/contact'><li><span>CONTACT ME</span></li></NavLink>
      <NavLink to='/about'><li><span>ABOUT ME</span></li></NavLink>
      <NavLink to='/resume'><li><span>RESUME</span></li></NavLink>
    </ul>
  );
};
