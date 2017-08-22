import React from 'react';

export const Resume = () => {
  return (
    <div className='main-content-div'>
      <div className='resume-container'>
        <div className='profile-div resume-content'>
          <div className='resume-text'>
            <h1>PROFILE</h1>
            <p className='profile-content small-content'>
              Studying Creative Writing taught me to see the
              world through a creative lens. Studying Psychology
              allowed me to see the world through a logical one.
              Coding has allowed me to combine these
              viewpoints and apply them towards technological
              solutions.
            </p>
          </div>
        </div>
        <div className='skills-div resume-content'>
          <div className='resume-text'>
            <h1>SKILLS</h1>
            <ul className='skills-list small-content'>
              <li className='skills-list-item'>JAVASCRIPT</li>
              <li className='skills-list-item'>ES6</li>
              <li className='skills-list-item'>HTML 5</li>
              <li className='skills-list-item'>CSS 3</li>
              <li className='skills-list-item'>JQUERY</li>
              <li className='skills-list-item'>JEST TESTING</li>
              <li className='skills-list-item'>CHAI TESTING</li>
              <li className='skills-list-item'>REACT</li>
              <li className='skills-list-item'>REDUX</li>
              <li className='skills-list-item'>REACT ROUTER</li>
              <li className='skills-list-item'>HTML CANVAS</li>
              <li className='skills-list-item'>D3</li>
            </ul>
          </div>
        </div>
        <div className='education-div resume-content'>
          <div className='resume-text'>
            <h1>EDUCATION</h1>
            <p className='small-content'>
              Turing School of Software and Design
              Front-End Web Development Program
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
