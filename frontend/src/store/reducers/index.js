import settings from './settings';
import build from './build';
import buildsQueue from './buildsQueue';
import { combineReducers } from 'redux';
export const initialState = {};

export const rootReducer = combineReducers({ settings, build, buildsQueue });