import React from 'react';

export const Main = () => {
  return (
    <div className='main-content-div'>
      <section className='main-section'>
        <div>
          <img className='logo-black' alt='logo' src={require('../logo-black.png')} />
        </div>
        <div>
          <h1>Spencer Hilvitz</h1>
          <h2>Front End Web Developer</h2>
        </div>
      </section>
    </div>
  );
};
