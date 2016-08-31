import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './components/Root';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
