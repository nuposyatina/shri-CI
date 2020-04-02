import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
