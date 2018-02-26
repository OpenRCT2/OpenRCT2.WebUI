import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Alert } from '../components/Alert';
import { PageBanner } from '../components/PageBanner';
import { SiteConfig } from '../config';
import { Profile } from '../selectors';

const propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
});

export class TextBox extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.children}</label>
        <input id={this.props.id} type={this.props.type} className="form-control" value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
}

export class SignUpPage extends Component {

  constructor(props) {
    super(props);
    this.signUpClick = this.signUpClick.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.emailOnChange = this.emailOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
    this.passwordConfirmOnChange = this.passwordConfirmOnChange.bind(this);
    this.captchaOnChange = this.captchaOnChange.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      captcha: null,
      errorText: '',
      isBusy: false,
    };
  }

  usernameOnChange(e) {
    this.setState({ username: e.target.value })
  }

  emailOnChange(e) {
    this.setState({ email: e.target.value })
  }

  passwordOnChange(e) {
    this.setState({ password: e.target.value })
  }

  passwordConfirmOnChange(e) {
    this.setState({ passwordConfirm: e.target.value })
  }

  captchaOnChange(value) {
    this.setState({ captcha: value });
  }

  signUpClick(e) {
    e.preventDefault();

    // First validate client side
    const errorText = this.validateClient();
    if (errorText !== true) {
      this.setState({ errorText });
      return;
    }

    const { signIn, signUp } = this.props;
    const { username, email, password, captcha } = this.state;
    this.setState({ isBusy: true });
    signUp({ username, email, password, captcha })
      .then(() => {
        signIn(username, password)
          .catch(() => {
            this.setState({ errorText: 'Your account was created, but you could not be signed in.' });
          })
      })
      .catch(errorText => {
        this.setState({ errorText });
        this.setState({ isBusy: false });
        this.recaptcha.reset();
      });
  }

  validateClient() {
    const { username, email, password, passwordConfirm, captcha } = this.state;
    if (!/^[a-zA-Z0-9-_]{3,}$/.test(username)) {
      return 'Username must be at least 3 characters and can only contain alphanumeric characters, hyphen (-) or underscore (_).';
    }
    if (!/^.+@.+$/.test(email)) {
      return 'Invalid email address.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (passwordConfirm !== password) {
      return 'Passwords do not match.';
    }
    if (!captcha) {
      return 'reCAPTCHA not checked';
    }
    return true;
  }

  render() {
    if (Profile.isSignedIn(this.props.profile)) {
      return (<Redirect to="/" />);
    }

    const maxWidth = 400;
    const { username, email, password, passwordConfirm, errorText, isBusy } = this.state;
    return (
      <React.Fragment>
        <PageBanner image="signin">Create account</PageBanner>
        <div className="container container-main">
          {errorText &&
            <Alert type="danger" maxWidth={maxWidth}>{errorText}</Alert>
          }
          <div className="card mx-auto mb-1" style={{maxWidth}}>
            <div className="card-body">
              <form>
                <TextBox id="signup-username" type="input" value={username} onChange={this.usernameOnChange}>Username</TextBox>
                <TextBox id="signup-email" type="email" value={email} onChange={this.emailOnChange}>Email address</TextBox>
                <TextBox id="signup-password" type="password" value={password} onChange={this.passwordOnChange}>Password</TextBox>
                <TextBox id="signup-password-confirm" type="password" value={passwordConfirm} onChange={this.passwordConfirmOnChange}>Confirm password</TextBox>
                <ReCAPTCHA className="mb-3" sitekey={SiteConfig.reCaptchaKey} onChange={this.captchaOnChange} ref={e => this.recaptcha = e} />
                <button type="submit" className="btn btn-primary" disabled={isBusy} onClick={this.signUpClick}>Create account</button>&nbsp;
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignUpPage.propTypes = propTypes;
SignUpPage = connect(mapStateToProps, actions)(SignUpPage);
