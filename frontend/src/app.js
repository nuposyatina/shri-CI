import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import Application from './components/Application';

ReactDOM.render(
  <Provider store={ store }>
    <Application />
  </Provider> ,
  window.document.getElementById('app')
);
