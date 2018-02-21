// eslint-disable-next-line
import * as api from '../api';
import { getIsFetching } from '../reducers';
import { ProfileState } from '../reducers/profile';

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

export const signIn = (username, password) => (dispatch, getState) => {
  let profile = getState().profile;
  if (profile.state === ProfileState.DEFAULT) {
    dispatch({
      type: 'SIGN_IN_REQUEST',
    });
    return api.signIn(username, password)
      .then(response => {
        dispatch({
          type: 'SIGN_IN_SUCCESS',
          response: response,
        });
      })
      .catch(error => {
        dispatch({
          type: 'SIGN_IN_FAILURE',
          message: error.message || 'Something went wrong.',
        });
        throw new Error();
      });
  }
  return Promise.resolve();
}

export const signOut = () => (dispatch, getState) => {
  let profile = getState().profile;
  if (profile.state === ProfileState.SIGNED_IN) {
    dispatch({
      type: 'SIGN_OUT_REQUEST',
    });
    return api.signOut()
      .then(response => {
        dispatch({
          type: 'SIGN_OUT_SUCCESS',
          response: response,
        });
      })
      .catch(error => {
        dispatch({
          type: 'SIGN_OUT_FAILURE',
          message: error.message || 'Something went wrong.',
        });
        throw new Error();
      });
  }
  return Promise.resolve();
}
