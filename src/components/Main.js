import React from 'react';

export const Main = () => {
  return (
    <div className='main-content-div'>
      <section className='main-section'>
        <div>
          <img className='logo-main' alt='logo' src={require('../logo-white.png')} />
        </div>
        <div className='main-div'>
          <h1 className='main-name'>spencer hilvitz</h1>
          <h2 className='main-title'>front end web developer</h2>
        </div>
      </section>
    </div>
  );
};
