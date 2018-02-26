import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Profile } from '../selectors';

const propTypes = {
  signOut: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export class SignOutPage extends Component {
  render() {
    if (Profile.isSignedIn(this.props.profile)) {
      this.props.signOut()
      return (<div />);
    } else {
      return (<Redirect to="/" />);
    }
  }
}

SignOutPage.propTypes = propTypes;
SignOutPage = connect(mapStateToProps, actions)(SignOutPage);
