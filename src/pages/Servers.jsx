import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getServers, getErrorMessage, getIsFetching } from '../reducers';
import { PageBanner } from '../components/PageBanner';
import './Servers.css';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch servers. {message}</p>
    <button className="btn btn-primary btn-sm" onClick={onRetry}>Retry</button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

class ServerItem extends Component {
  render() {
    const { server } = this.props;
    return (
      <li>
        <div className="ServerItem-name">{server.name}</div>
        <div className="ServerItem-players">{server.players} players</div>
        <div className="ServerItem-description">{server.description}</div>
      </li>
    )
  }
}

export class ServersPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchServers } = this.props;
    fetchServers();
  }

  render() {
    let serverProps = this.props;
    function ServerList() {
      const { isFetching, errorMessage, servers } = serverProps;
      if (isFetching && servers.length === 0) {
        return (
          <p className="Servers-intro">Loading...</p>
        );
      }
      if (errorMessage && servers.length === 0) {
        return (
          <FetchError
            message={errorMessage}
            onRetry={() => this.fetchData()}
          />
        );
      }

      // Sort servers by # players (desc) and then name (asc)
      let sortedServers = servers.sort((a, b) => {
        if (a.players !== b.players) {
          return b.players - a.players;
        }
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      return (
        <ul className="ul-stack Servers-list">
          {sortedServers.map((server, index) =>
            <ServerItem key={index} server={server} />
          )}
        </ul>
      );
    }

    return (
      <div>
        <PageBanner image="servers">Servers</PageBanner>
        <div className="container container-main">
          <div className="Servers">
            <ServerList />
          </div>
        </div>
      </div>
    )
  }
}

ServersPage.propTypes = {
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

ServersPage = withRouter(connect(
  mapStateToProps,
  actions
)(ServersPage));
