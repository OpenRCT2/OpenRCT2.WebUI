import { combineReducers } from 'redux';

const createAuth = () => {
 const auth = (state = [], action) => {
   switch (action.type) {
     case 'LOGIN_SUCCESS':
     case 'LOGOUT_SUCCESS':
       return action.response
     default:
       return state;
   }
 };

 const isFetching = (state = false, action) => {
   switch (action.type) {
     case 'LOGIN_REQUEST':
     case 'LOGOUT_REQUEST':
       return true;
     case 'LOGIN_SUCCESS':
     case 'LOGIN_FAILURE':
     case 'LOGOUT_SUCCESS':
     case 'LOGOUT_FAILURE':
       return false;
     default:
       return state;
   }
 };

 const errorMessage = (state = null, action) => {
   switch (action.type) {
     case 'LOGIN_FAILURE':
     case 'LOGOUT_FAILURE':
       return action.message;
     case 'LOGIN_REQUEST':
     case 'LOGIN_SUCCESS':
     case 'LOGOUT_REQUEST':
     case 'LOGOUT_SUCCESS':
       return null;
     default:
       return state;
   }
 };

 return combineReducers({
   auth,
   isFetching,
   errorMessage,
 });
};

export default createAuth;

export const getAuth = (state) => state.auth;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
