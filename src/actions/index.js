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

export const signIn = (username, password) => {
  return {
    type: 'PROFILE_SIGNIN',
    username,
    password
  }
}
