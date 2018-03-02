import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';
import news from './news';
import profile from './profile';
import servers from './servers';

const rootReducer = combineReducers({
  notifications,
  news,
  profile,
  servers,
});

export default rootReducer;
