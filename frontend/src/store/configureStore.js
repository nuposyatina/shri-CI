import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));
