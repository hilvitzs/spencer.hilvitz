import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

let history = createHistory();

require('./styles/normalize.css');
require('./styles/about.css');
require('./styles/app.css');
require('./styles/contact.css');
require('./styles/main.css');
require('./styles/navbar.css');
require('./styles/portfolio.css');
require('./styles/resume.css');

render(<BrowserRouter history={history} >
  <div>
    <Route to='/' component={App} />
  </div>
</BrowserRouter>, document.getElementById('root'));
