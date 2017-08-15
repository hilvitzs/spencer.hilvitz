import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <section className='navbar'>
      <NavLink className='portfolio' to='/portfolio'><span>PORTFOLIO</span></NavLink>
      <NavLink className='contact' to='/contact'><span>CONTACT</span></NavLink>
      <NavLink className='about' to='/about'><span>ABOUT</span></NavLink>
      <NavLink className='resume' to='/resume'><span>RESUME</span></NavLink>
    </section>
  );
};
