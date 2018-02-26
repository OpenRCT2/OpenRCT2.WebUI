import { combineReducers } from 'redux';

import news from './news';
import profile from './profile';
import createServerList, * as fromServerList from './servers'; // eslint-disable-next-line

const servers = createServerList()

const orct = combineReducers({
  news,
  profile,
  servers,
});

export default orct;

export const getServers = (state) =>
  fromServerList.getServers(state.servers);

export const getIsFetching = (state) =>
  fromServerList.getIsFetching(state.servers);

export const getErrorMessage = (state) =>
  fromServerList.getErrorMessage(state.servers);
