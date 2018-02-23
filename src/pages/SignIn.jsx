import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { PageBanner } from '../components/PageBanner';
import { isSignedIn } from '../reducers/profile';

const propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
});

export class SignInPage extends Component {

  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }

  signInClick = (e) => {
    e.preventDefault();

    let username = this.refs.inputEmail.value;
    let password = this.refs.inputPassword.value;
    if (username && password) {
      this.props.signIn(username, password)
        .catch(() => {
          this.setState(prevState => ({
            showAlert: true
          }));
        });
    }
  }

  render() {
    if (isSignedIn(this.props.profile)) {
      return (<Redirect to="/" />);
    }

    function Alert(props) {
      if (!props.visible) return null;
      return (
        <div className="alert alert-danger mx-auto" role="alert" style={{maxWidth: 400}}>
          Your username or password was incorrect.
        </div>
      )
    }

    return (
      <div>
        <PageBanner image="signin">Sign in</PageBanner>
        <div className="container container-main">
          <Alert visible={this.state.showAlert} />
          <div className="card mx-auto" style={{maxWidth: 400}}>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="signin-email">Email address</label>
                  <input type="email" className="form-control" id="signin-email" ref="inputEmail" />
                </div>
                <div className="form-group">
                  <label htmlFor="signin-password">Password</label>
                  <input type="password" className="form-control" id="signin-password" ref="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.signInClick}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = propTypes;
SignInPage = connect(mapStateToProps, actions)(SignInPage);
