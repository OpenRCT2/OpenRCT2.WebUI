import { combineReducers } from 'redux';
import news from './news';
import profile from './profile';
import servers from './servers';

const rootReducer = combineReducers({
  news,
  profile,
  servers,
});

export default rootReducer;
