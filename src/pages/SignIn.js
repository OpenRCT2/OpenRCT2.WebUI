import React, { Component } from 'react';
import { PageBanner } from '../components/PageBanner';

export class SignInPage extends Component {
  render() {
    return (
      <div>
        <PageBanner image="signin">Sign in</PageBanner>
        <div className="container container-main">
          <div className="card mx-auto" style={{maxWidth: 400}}>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="signin-email">Email address</label>
                  <input type="email" className="form-control" id="signin-email" />
                </div>
                <div className="form-group">
                  <label for="signin-password">Password</label>
                  <input type="password" className="form-control" id="signin-password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
