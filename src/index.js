import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

require('./styles/styles.css');

render(<BrowserRouter history={history} >
  <div>
    <Route to='/' component={App} />
  </div>
</BrowserRouter>, document.getElementById('root'));
