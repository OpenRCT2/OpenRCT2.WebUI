import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { PageBanner } from '../components/PageBanner';

export class SignInPage extends Component {

  signInClick = (e) => {
    e.preventDefault();

    const { signIn } = this.props;
    let username = this.refs.inputEmail.value;
    let password = this.refs.inputPassword.value;
    signIn(username, password);
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <PageBanner image="signin">Sign in</PageBanner>
        <div className="container container-main">
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

SignInPage.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  return { };
};

SignInPage = withRouter(connect(
  mapStateToProps,
  actions
)(SignInPage));
