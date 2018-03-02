import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import * as actions from '../actions';
import { PageBanner } from '../components/PageBanner';
import { Servers } from '../selectors';
import 'react-table/react-table.css'
import './Servers.css';

const ServerTableColumns = [
  {
    Header: <i className="fa fa-lock" title="Password protected" />,
    Cell: props => {
      if (props.original.requiresPassword) {
        return (<i className="fa fa-lock" />);
      } else {
        return null;
      }
    },
    accessor: 'requiresPassword',
    maxWidth: 25,
    style: {
      textAlign: 'center'
    }
  },
  {
    Header: 'Name',
    Cell: props => (
      <div style={{margin: '-6px 0'}}>
        <div>{props.original.name}</div>
        <div style={{fontSize: '10px'}}>{props.original.description}</div>
      </div>
    ),
    accessor: 'name',
    headerStyle: {
      textAlign: 'left'
    }
  }, {
    id: 'years',
    Header: <i className="fa fa-calendar" title="Years" />,
    Cell: props => Math.floor(props.original.gameInfo.month / 8),
    accessor: row => row.gameInfo.month,
    style: {
      textAlign: 'right'
    },
    minWidth: 6
  }, {
    Header: <i className="fa fa-users" title="Players" />,
    Cell: props => (
      <React.Fragment>{props.original.players} / {props.original.maxPlayers}</React.Fragment>
    ),
    accessor: 'players',
    minWidth: 10,
    style: {
      textAlign: 'center'
    }
  }, {
    Header: <i className="fa fa-code-fork" title="Version" />,
    accessor: 'version',
    minWidth: 8,
    style: {
      textAlign: 'right'
    }
  }
];

const propTypes = {
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  fetchServers: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    errorMessage: Servers.getErrorMessage(state),
    isFetching: Servers.getIsFetching(state),
    servers: Servers.getServers(state),
  };
};

export class ServersPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchServers();
  }

  sortServers(servers) {
    return servers.sort((a, b) => {
      // Penalise servers with only 1 player
      if (a.players <= 1 && b.players > 1) {
        return 1;
      } else if (a.players > 1 && b.players <= 1) {
        return -1;
      }

      // Prioritise public servers
      if (a.requiresPassword && !b.requiresPassword) {
        return 1;
      } else if (!a.requiresPassword && b.requiresPassword) {
        return -1;
      }

      // Then by players
      if (a.players !== b.players) {
        return b.players - a.players;
      }

      // Then finally by name
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  render() {
    const ServerList = () => {
      const { isFetching, errorMessage, servers } = this.props;
      const sortedServers = this.sortServers(servers);
      console.log(sortedServers);
      return (
        <ReactTable
          data={sortedServers}
          columns={ServerTableColumns}
          resizable={false}
          defaultPageSize={50}
          minRows={8}
          loading={isFetching}
          noDataText={errorMessage}
          className="-striped -highlight" />
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
