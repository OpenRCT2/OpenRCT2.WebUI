import { combineReducers } from 'redux';

import createServerList, * as fromServerList from './servers'; // eslint-disable-next-line
import createObjectList, * as fromObjectList from './objects';
import createAuth, * as fromAuth from './auth';

const servers = createServerList()
const objects = createObjectList()
const auth = createAuth()

const orct = combineReducers({
  servers,
  objects,
  auth,
});

export default orct;

export const getServers = (state) => {
  const ids = fromServerList.getServers(state.servers);
  return ids;
};

export const getIsFetching = (state) =>
  fromServerList.getIsFetching(state.servers);

export const getErrorMessage = (state) =>
  fromServerList.getErrorMessage(state.servers);

export const getAuth = (state) => {
  const auth = fromAuth.getAuth(state.auth);
  return auth;
};

export const getAuthIsFetching = (state) =>
  fromAuth.getIsFetching(state.auth);

export const getAuthErrorMessage = (state) =>
  fromAuth.getErrorMessage(state.auth);
