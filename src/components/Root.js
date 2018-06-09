import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppLanding from './AppLanding';
import App from './App';
import Servers from './Servers';
import Objects from './Objects';
import Packs from './Objects';
import Login from './Login';
import Logout from './Logout';
import NoMatch from './NoMatch';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const Root = ({ store }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route name="landing" path="/" component={AppLanding}/>
          <Route name="logout" path="/logout" component={Logout}/>
          <Route name="login" path="/login" component={Login}/>
          <Route name="app" path="/" component={App}>
            <Route name="servers" path="servers" component={Servers}/>
            <Route name="objects" path="objects" component={Objects}/>
            <Route name="packs" path="packs" component={Packs}/>
            <Route path="*" component={NoMatch}/>
          </Route>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
