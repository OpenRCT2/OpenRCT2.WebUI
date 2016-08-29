import { combineReducers } from 'redux';

const createObjectsList = () => {
 const objects = (state = [], action) => {
   switch (action.type) {
     case 'FETCH_OBJECTS_SUCCESS':
       return action.response.result
     default:
       return state;
   }
 };

 const isFetching = (state = false, action) => {
   switch (action.type) {
     case 'FETCH_OBJECTS_REQUEST':
       return true;
     case 'FETCH_OBJECTS_SUCCESS':
     case 'FETCH_OBJECTS_FAILURE':
       return false;
     default:
       return state;
   }
 };

 const errorMessage = (state = null, action) => {
   switch (action.type) {
     case 'FETCH_OBJECTS_FAILURE':
       return action.message;
     case 'FETCH_OBJECTS_REQUEST':
     case 'FETCH_OBJECTS_SUCCESS':
       return null;
     default:
       return state;
   }
 };

 return combineReducers({
   objects,
   isFetching,
   errorMessage,
 });
};

export default createObjectsList;

export const getObjects = (state) => state.objects;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
