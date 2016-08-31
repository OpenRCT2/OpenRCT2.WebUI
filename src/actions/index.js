// eslint-disable-next-line
import { normalize } from 'normalizr';// eslint-disable-next-line
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchServers = () => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_SERVERS_REQUEST',
  });

  return api.fetchServers().then(
    response => {
      dispatch({
        type: 'FETCH_SERVERS_SUCCESS',
        response: response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_SERVERS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};

export const login = (user, password) => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'LOGIN_REQUEST',
  });

  return api.login(user, password).then(
    response => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        response: response,
      });
    },
    error => {
      dispatch({
        type: 'LOGIN_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};

export const logout = (token) => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'LOGOUT_REQUEST',
  });

  return api.logout(token).then(
    response => {
      dispatch({
        type: 'LOGOUT_SUCCESS',
        response: response,
      });
    },
    error => {
      dispatch({
        type: 'LOGOUT_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};
