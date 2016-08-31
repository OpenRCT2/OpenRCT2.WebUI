import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import orctApp from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/localStorage';

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const persistedState = loadState();

  const store = createStore(
    orctApp,
    persistedState,
    applyMiddleware(...middleware)
  );

  store.subscribe(throttle(() => {
    saveState({
      auth: store.getState().auth,
    });
  }, 1000));

  return store;
};

export default configureStore;
