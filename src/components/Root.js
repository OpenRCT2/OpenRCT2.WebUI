import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { App } from './App';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { CoasterCloudPage } from '../pages/CoasterCloud';
import { ServersPage } from '../pages/Servers';
import { PageNotFoundPage } from '../pages/PageNotFound';
import { SignInPage } from '../pages/SignIn';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect exact from="/" to="/home" />
      <Route path="/" component={App}>
        <Route path="home" component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="coastercloud" component={CoasterCloudPage}/>
        <Route path="servers" component={ServersPage}/>
        <Route path="signin" component={SignInPage}/>
        <Route path="*" component={PageNotFoundPage}/>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
