import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Servers from './Servers';
import Objects from './Objects';
import NoMatch from './NoMatch';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="servers" component={Servers}/>
      <Route path="objects" component={Objects}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
