import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { PageBanner } from '../components/PageBanner';
import { Profile } from '../selectors';

const propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  isSignedIn: Profile.isSignedIn(state)
});

export class SignOutPage extends Component {
  render() {
    const { isSignedIn, signOut } = this.props;
    if (isSignedIn) {
      signOut();
      return (
        <React.Fragment>
          <PageBanner image="signin">Sign out</PageBanner>
          <div className="container container-main">
            <p>Signing you out...</p>
          </div>
        </React.Fragment>
      );
    } else {
      return (<Redirect to="/" />);
    }
  }
}

SignOutPage.propTypes = propTypes;
SignOutPage = connect(mapStateToProps, actions)(SignOutPage);
