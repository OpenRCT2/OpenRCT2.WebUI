import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { isSignedIn } from '../reducers/profile';

export class SignOutPage extends Component {
  render() {
    if (isSignedIn(this.props.profile)) {
      const { signOut } = this.props;
      signOut()
      return (<div />);
    } else {
      return (<Redirect to="/" />);
    }
  }
}

SignOutPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

SignOutPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  return { profile: state.profile };
};

SignOutPage = withRouter(connect(
  mapStateToProps,
  actions
)(SignOutPage));
