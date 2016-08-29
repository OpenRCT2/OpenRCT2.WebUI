import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getServers, getErrorMessage, getIsFetching } from '../reducers';
import FetchError from './FetchError';

class Servers extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchServers } = this.props;
    fetchServers();
  }

  render() {
    const { isFetching, errorMessage, servers } = this.props;
    if (isFetching && !servers.length) {
      return (
        <div className="Servers">
          <h1>Servers</h1>
          <p className="Servers-intro">
            Loading...
          </p>
        </div>
      );
    }
    if (errorMessage && !servers.length) {
      return (
        <div className="Servers">
          <h1>Servers</h1>
          <FetchError
            message={errorMessage}
            onRetry={() => this.fetchData()}
          />
        </div>
      );
    }
    return (
      <div className="Servers">
        <h1>Servers</h1>
        <p className="Servers-intro">
          Servers list.
        </p>
        <ul>
          {servers.map((server, index) =>
            <li key={index}>{server.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

Servers.propTypes = {
  errorMessage: PropTypes.string,
  servers: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchServers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  return {
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
    servers: getServers(state),
  };
};

Servers = withRouter(connect(
  mapStateToProps,
  actions
)(Servers));

export default Servers;
