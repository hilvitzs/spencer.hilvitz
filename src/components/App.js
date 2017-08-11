import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { About } from './About';
import { Resume } from './Resume';

export const App = () => {
  return (
    <div className=''>
      <h1>spencer.hilvitz</h1>
      <Navbar />
      <Switch>
        <Route path='/portfolio' render={() => <Portfolio /> } />
        <Route path='/contact' render={() => <Contact /> } />
        <Route path='/about' render={() => <About /> } />
        <Route path='/resume' render={() => <Resume /> } />
      </Switch>
    </div>
  );
}
