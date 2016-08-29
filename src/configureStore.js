import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import orctApp from './reducers';

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(
    orctApp,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
