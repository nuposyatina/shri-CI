import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import { getSettings } from 'store/actions/settings';
import { getLocales } from 'store/actions/locales';
import Application from './components/Application';
import { getLang } from 'lib';

const lang = getLang();
store.dispatch(getLocales(lang));
store.dispatch(getSettings());

ReactDOM.render(
  <Provider store={ store }>
    <Application />
  </Provider> ,
  window.document.getElementById('app')
);
