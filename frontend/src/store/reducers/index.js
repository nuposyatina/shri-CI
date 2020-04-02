import settings from './settings';
import build from './build';
import { combineReducers } from 'redux';
export const initialState = {};

export const rootReducer = combineReducers({ settings, build });