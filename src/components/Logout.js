import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getAuth } from '../reducers';

class Logout extends Component {
  componentWillMount() {
    const { auth } = this.props;
    this.logout(auth.token);
  }

  componentDidMount() {
    const { router } = this.props;
    router.push('/');
  }

  logout(token) {
    const { logout } = this.props;
    logout(token);
  }

  render() {
    return null
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state, { params }) => {
  return {
    auth: getAuth(state),
  };
};

Logout = withRouter(connect(
  mapStateToProps,
  actions
)(Logout));

export default Logout;
