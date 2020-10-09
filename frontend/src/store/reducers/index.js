import settings from './settings';
import build from './build';
import buildsQueue from './buildsQueue';
import buildDetails from './buildDetails';
import logs from './logs';
import locales from './locales';
import { combineReducers } from 'redux';
export const initialState = {};

export const rootReducer = combineReducers({
  settings,
  build,
  buildsQueue,
  buildDetails,
  logs,
  locales
});