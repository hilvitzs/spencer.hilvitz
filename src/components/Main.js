import React from 'react';

export const Main = () => {
  return (
    <div className='main-content-div'>
      <section className='main-section'>
        <img className='logo-main' alt='logo' src={require('../logo.png')} />
        <div className='main-div'>
          <h1 className='main-name'>spencer hilvitz</h1>
          <h2 className='main-title'>front end web developer</h2>
        </div>
      </section>
    </div>
  );
};
