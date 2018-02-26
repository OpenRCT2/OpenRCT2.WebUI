import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
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
      return (<div>Signing you out...</div>);
    } else {
      return (<Redirect to="/" />);
    }
  }
}

SignOutPage.propTypes = propTypes;
SignOutPage = connect(mapStateToProps, actions)(SignOutPage);
