import React from 'react';

export const Portfolio = () => {
  return (
    <div className='main-content-div'>
      <div className='portfolio-div'>
        <div className='movie-div'>
          <div className='portfolio-text'>
            <p>Movie Tracker</p>
            <p>React, React Router, Redux</p>
            <img alt='' className='' src={require('../movietracker.png')} />
          </div>
        </div>
      </div>
    </div>
  );
};
