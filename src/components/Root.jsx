import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { CoasterCloudPage } from '../pages/CoasterCloud';
import { ServersPage } from '../pages/Servers';
import { PageNotFoundPage } from '../pages/PageNotFound';
import { SignInPage } from '../pages/SignIn';
import { SignOutPage } from '../pages/SignOut';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

const propTypes = {
  store: PropTypes.object.isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <TopBar profile={store.getState().profile} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/coastercloud" component={CoasterCloudPage}/>
          <Route path="/servers" component={ServersPage}/>
          <Route path="/signin" component={SignInPage}/>
          <Route path="/signout" component={SignOutPage}/>
          <Route component={PageNotFoundPage}/>
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
