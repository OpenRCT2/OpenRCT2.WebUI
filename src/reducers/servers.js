import { combineReducers } from 'redux';

const reducer =
  combineReducers({
    errorMessage: (state = null, action) => {
      switch (action.type) {
        case 'FETCH_SERVERS_FAILURE':
          return action.message;
        case 'FETCH_SERVERS_REQUEST':
        case 'FETCH_SERVERS_SUCCESS':
          return null;
        default:
          return state;
      }
    },
    isFetching: (state = false, action) => {
      switch (action.type) {
        case 'FETCH_SERVERS_REQUEST':
          return true;
        case 'FETCH_SERVERS_SUCCESS':
        case 'FETCH_SERVERS_FAILURE':
          return false;
        default:
          return state;
      }
    },
    servers: (state = [], action) => {
      switch (action.type) {
        case 'FETCH_SERVERS_SUCCESS':
          return action.response
        default:
          return state;
      }
    },
  });

export default reducer;
