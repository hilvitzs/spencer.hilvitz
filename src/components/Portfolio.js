import React from 'react';

export const Portfolio = () => {
  return (
    <div className='main-content-div'>
      <div className='portfolio-div'>
        <div className='mentr-div'>
          <div className='portfolio-text'>
            <img alt='' className='' src={require('../mentr.png')} />
          </div>
        </div>
        <div className='movie-div'>
          <div className='portfolio-text'>
            <img alt='' className='movietracker-img' src={require('../movietracker.png')} />
          </div>
        </div>
        <div className='snake-div'>
          <div className='portfolio-text'>
            <img alt='' className='' src={require('../movietracker.png')} />
          </div>
        </div>
      </div>
    </div>
  );
};
