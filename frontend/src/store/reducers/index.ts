import settings from './settings';
import build from './build';
import buildsQueue from './buildsQueue';
import buildDetails from './buildDetails';
import logs from './logs';
import { combineReducers } from 'redux';
export const initialState = {};

export type MainAction = {
  type: string,
  payload: any
};

export const rootReducer = combineReducers({
  settings,
  build,
  buildsQueue,
  buildDetails,
  logs
});