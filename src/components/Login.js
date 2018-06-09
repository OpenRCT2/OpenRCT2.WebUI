import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getAuth, getAuthErrorMessage, getAuthIsFetching } from '../reducers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  handleUserChange(e) {
    this.setState({user: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    const password = this.state.password;
    this.login(user, password);
  }

  login(user, password) {
    const { login } = this.props;
    login(user, password);
  }

  componentWillMount() {
    const {auth, router} = this.props;
    if (auth.token) {
      router.push('/')
    }
  }

  render() {
    const { auth, isFetching, errorMessage, router } = this.props;
    if (isFetching) {
      return (
        <div className="Login">
          <h3>Login</h3>
          <p className="Login-intro">
            Logging in...
          </p>
        </div>
      );
    }
    if (errorMessage) {
      return (
        <div className="Login">
          <h3>Login</h3>
          <p>{errorMessage}</p>
        </div>
      );
    }

    if (auth.token) {
      router.replace('/');
    }

    return (
      <div className="Login">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <TextField
              name='user'
              type='text'
              value={this.state.user}
              onChange={this.handleUserChange.bind(this)}
              placeholder='Username'/>
          </div>
          <div>
            <TextField
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
              placeholder='Password'/>
          </div>
          <div>
            <Button type='submit'>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state, { params }) => {
  return {
    isFetching: getAuthIsFetching(state),
    errorMessage: getAuthErrorMessage(state),
    auth: getAuth(state),
  };
};

Login = withRouter(connect(
  mapStateToProps,
  actions
)(Login));

export default Login;
