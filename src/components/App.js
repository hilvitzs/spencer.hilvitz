import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { About } from './About';
import { Resume } from './Resume';

export const App = () => {
  return (
    <section className='app-wrapper'>
      <section className='heading-section'>
        <div className='heading-wrapper'>
          <h1 className='navbar-title'>spencer.hilvitz</h1>
          <Navbar />
        </div>
      </section>
      <div className='background-container'>
        <section className='main-content-section'>
          <Switch>
            <Route path='/portfolio' render={() => <Portfolio />} />
            <Route path='/contact' render={() => <Contact />} />
            <Route path='/about' render={() => <About />} />
            <Route path='/resume' render={() => <Resume />} />
          </Switch>
        </section>
      </div>
    </section>
  );
};
