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
import { TopBar } from './TopBar';
import { Footer } from './Footer';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/coastercloud" component={CoasterCloudPage}/>
          <Route path="/servers" component={ServersPage}/>
          <Route path="/signin" component={SignInPage}/>
          <Route component={PageNotFoundPage}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
