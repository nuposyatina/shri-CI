import { MainAction } from '.';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

const initialState = {
  loading: false,
  isLoad: false,
  isSaved: true
};

const settings = (state = initialState, action: MainAction) => {
  switch (action.type) {
    case 'GET_SETTINGS_STARTED':
      return {
        ...state,
        loading: true,
        isLoad: false,
        isSaved: true
      };
    case 'GET_SETTINGS_SUCCESS':
      const data = action.payload.data ? action.payload.data : action.payload;
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...data
      };
    case 'GET_SETTINGS_ERROR':
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...action.payload
      };
    case 'SET_SETTINGS_STARTED':
      return {
        loading: true,
        isLoad: false,
        isSaved: false
      };
    case 'SET_SETTINGS_SUCCESS':
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...action.payload
      }
    default:
      return state;
  };
};

export default settings;