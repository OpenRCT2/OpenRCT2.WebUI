import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAuth } from '../reducers';
import './App.css';
import LandingNavBar from './LandingNavBar'
import AppBar from '@material-ui/core/AppBar'

class AppLanding extends Component {
  render() {
    const { auth } = this.props
    const lnb = <LandingNavBar auth={auth} />
    return (
      <div className="AppLanding">
        <AppBar
          title="OpenRCT2"
          iconElementRight={lnb}
          showMenuIconButton={false}>
        </AppBar>
      </div>
    );
  }
}

AppLanding.propTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state, { params }) => {
  return {
    auth: getAuth(state),
  };
};

AppLanding = withRouter(connect(
  mapStateToProps
)(AppLanding));

export default AppLanding;
