import { combineReducers } from 'redux';

const createServerList = () => {
 const servers = (state = [], action) => {
   switch (action.type) {
     case 'FETCH_SERVERS_SUCCESS':
       return action.response
     default:
       return state;
   }
 };

 const isFetching = (state = false, action) => {
   switch (action.type) {
     case 'FETCH_SERVERS_REQUEST':
       return true;
     case 'FETCH_SERVERS_SUCCESS':
     case 'FETCH_SERVERS_FAILURE':
       return false;
     default:
       return state;
   }
 };

 const errorMessage = (state = null, action) => {
   switch (action.type) {
     case 'FETCH_SERVERS_FAILURE':
       return action.message;
     case 'FETCH_SERVERS_REQUEST':
     case 'FETCH_SERVERS_SUCCESS':
       return null;
     default:
       return state;
   }
 };

 return combineReducers({
   servers,
   isFetching,
   errorMessage,
 });
};

export default createServerList;

export const getServers = (state) => state.servers;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
