import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Servers from './Servers';
import Objects from './Objects';
import NoMatch from './NoMatch';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="servers" component={Servers}/>
        <Route path="objects" component={Objects}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
