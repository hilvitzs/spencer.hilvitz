import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <section className='navbar'>
      <NavLink className='portfolio navlink' to='/portfolio'><span>PORTFOLIO</span></NavLink>
      <NavLink className='contact navlink' to='/contact'><span>CONTACT</span></NavLink>
      <NavLink className='resume navlink' to='/resume'><span>RESUME</span></NavLink>
      <NavLink className='about navlink' to='/about'><span>ABOUT</span></NavLink>
    </section>
  );
};
