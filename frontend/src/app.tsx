import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import { getSettings } from 'store/actions/settings';
import Application from './components/Application';

store.dispatch(getSettings());

ReactDOM.render(
  <Provider store={ store }>
    <Application/>
  </Provider> ,
  window.document.getElementById('app')
);
