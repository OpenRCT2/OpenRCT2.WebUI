import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Alert } from '../components/Alert';
import { PageBanner } from '../components/PageBanner';
import { Profile } from '../selectors';

const propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
});

export class SignInPage extends Component {

  constructor(props) {
    super(props);
    this.signInClick = this.signInClick.bind(this);
    this.resetPasswordClick = this.resetPasswordClick.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.state = {
      username: '',
      password: '',
      showAlert: false
    };
  }

  usernameOnChange(e) {
    this.setState({ username: e.target.value })
  }

  passwordOnChange(e) {
    this.setState({ password: e.target.value })
  }

  signInClick(e) {
    e.preventDefault();

    const { username, password } = this.state;
    if (username && password) {
      this.props.signIn(username, password)
        .catch(() => {
          this.setState({ showAlert: true });
        });
    }
  }

  resetPasswordClick(e) {
    e.preventDefault();
  }

  render() {
    if (Profile.isSignedIn(this.props.profile)) {
      return (<Redirect to="/" />);
    }

    const maxWidth = 400;
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <PageBanner image="signin">Sign in</PageBanner>
        <div className="container container-main">
          {this.state.showAlert &&
            <Alert type="danger" maxWidth={maxWidth}>Your username or password was incorrect.</Alert>
          }
          <div className="card mx-auto mb-1" style={{maxWidth}}>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="signin-email">Email address</label>
                  <input type="email" className="form-control" value={username} onChange={this.usernameOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="signin-password">Password</label>
                  <input type="password" className="form-control" value={password} onChange={this.passwordOnChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.signInClick}>Sign in</button>&nbsp;
                <button className="btn btn-secondary" onClick={this.resetPasswordClick}>Reset password</button>
              </form>
            </div>
          </div>
          <div className="card mx-auto" style={{maxWidth}}>
            <div className="card-body">
              <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignInPage.propTypes = propTypes;
SignInPage = connect(mapStateToProps, actions)(SignInPage);
