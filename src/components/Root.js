import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Content from './Content';
import Servers from './Servers';
import NoMatch from './NoMatch';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect exact from="/" to="/home" />
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="content" component={Content}/>
        <Route path="servers" component={Servers}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
