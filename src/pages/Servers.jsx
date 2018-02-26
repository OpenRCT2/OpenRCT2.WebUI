import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { PageBanner } from '../components/PageBanner';
import { Servers } from '../selectors';
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

const propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  fetchServers: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    errorMessage: Servers.getErrorMessage(state.servers),
    isFetching: Servers.getIsFetching(state.servers),
    servers: Servers.getServers(state.servers),
  };
};

export class ServersPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchServers();
  }

  render() {
    const ServerList = () => {
      const { isFetching, errorMessage, servers } = this.props;
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
      <React.Fragment>
        <PageBanner image="servers">Servers</PageBanner>
        <div className="container container-main">
          <div className="Servers">
            <ServerList />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ServersPage.propTypes = propTypes;
ServersPage = connect(mapStateToProps, actions)(ServersPage);
