import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { getSettings } from './store/actions/settings';
import Application from './components/Application';

store.dispatch(getSettings());

ReactDOM.render(
  <Provider store={ store }>
    <Application />
  </Provider> ,
  window.document.getElementById('app')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // суперкостыль, потому что не нашла как по-другому заставить parcel видеть файл воркера. Просто сама перед билдом статики засовываю его в папку dist (в скрипте make файла)
    navigator.serviceWorker.register('http://localhost:3000/sw.js')
      .then(
        (registration) => {
          console.log(`ServiceWorker registration successful in ${registration.scope}.`);
        },
        (err) => {
          console.log('ServiceWorker registration failed:', err);
        }
      );
  });
}