import { combineReducers } from 'redux';

import { profile } from './profile';
import { news } from './news';
import createServerList, * as fromServerList from './servers'; // eslint-disable-next-line
import createObjectList, * as fromObjectList from './objects';

const servers = createServerList()
const objects = createObjectList()

const orct = combineReducers({
  profile,
  news,
  servers,
  objects,
});

export default orct;

export const getServers = (state) =>
  fromServerList.getServers(state.servers);

export const getIsFetching = (state) =>
  fromServerList.getIsFetching(state.servers);

export const getErrorMessage = (state) =>
  fromServerList.getErrorMessage(state.servers);
