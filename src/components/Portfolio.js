import React from 'react';

export const Portfolio = () => {
  return (
    <div className='main-content-div'>
      <div className='portfolio-div'>
        <div className='mentr-div'>
          <div className='portfolio-text'>
            <img alt='' className='mentr-img portfolio-img' src={require('../mentr.png')} />
            <section className='after'>
              <p className='hover-text'>Mentr</p>
              <p className='hover-text'>React, React-Router</p>
              <p className='hover-text'><a href='https://turing-mentr.herokuapp.com/'>Deployed Site</a></p>
              <p className='hover-text'><a href='https://github.com/letakeane/mentr'>Github</a></p>
            </section>
          </div>
        </div>
        <div className='movie-div'>
          <div className='portfolio-text'>
            <img alt='' className='movietracker-img portfolio-img' src={require('../movietracker.png')} />
            <section className='after'>
              <p className='hover-text'>MovieTracker</p>
              <p className='hover-text'>React, React-Router, Redux</p>
              <p className='hover-text'><a href='https://movietracker-turing.herokuapp.com/'>Deployed Site</a></p>
              <p className='hover-text'><a href='https://github.com/DBULL7/movie_tracker'>Github</a></p>
            </section>
          </div>
        </div>
        <div className='byob-div'>
          <div className='portfolio-text'>
            <img alt='' className='byob-img portfolio-img' src={require('../byob.png')} />
            <section className='after'>
              <p className='hover-text'>Build Your Own Backend</p>
              <p className='hover-text'>Express, PSQL, Wine.com API</p>
              <p className='hover-text'><a href='https://sh-byob.herokuapp.com/api/v1/wines'>Deployed Site</a></p>
              <p className='hover-text'><a href='https://github.com/hilvitzs/byob'>Github</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
