import { RequestSettingsBody, ResponseSettingsPost, ResponseSettingsGet } from 'backend/server';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';

const getSettingsStarted = () => ({
  type: 'GET_SETTINGS_STARTED'
});

const getSettingsSuccess = (settings: ResponseSettingsGet) => ({
  type: 'GET_SETTINGS_SUCCESS',
  payload: {
    ...settings
  }
});

const getSettingsError = (err: string) => ({
  type: 'GET_SETTINGS_ERROR',
  payload: {
    err
  }
});

const setSettingsStarted = () => ({
  type: 'SET_SETTINGS_STARTED'
});

const setSettingsSuccess = (data: RequestSettingsBody) => ({
  type: 'SET_SETTINGS_SUCCESS',
  payload: {
    ...data
  }
});

const setSettingsError = (err: string) => ({
  type: 'SET_SETTINGS_ERROR',
  payload: {
    err
  }
});

const getSettingsRequest: (dispatch: Function) => Promise<ResponseSettingsGet> = (dispatch) => {
  return fetch('http://localhost:3000/api/settings')
    .then((response) => response.json())
    .then((data) => dispatch(getSettingsSuccess(data)))
    .catch((err) => dispatch(getSettingsError(err)));
}

const setSettingsRequest: (dispatch: Function, data: RequestSettingsBody) => Promise<ResponseSettingsPost> = (dispatch, data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return fetch('http://localhost:3000/api/settings', options)
  .then((response) => {
    if (response.status === 200) {
      dispatch(setSettingsSuccess(data))
    } else {
      throw new Error('Ошибка при сохранении настроек')
    }
  })
  .catch((err) => dispatch(setSettingsError(err)))
}

export const getSettings = (): ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    dispatch(getSettingsStarted());
    getSettingsRequest(dispatch);
  }
};

export const setSettings = (data: RequestSettingsBody) : ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    dispatch(setSettingsStarted());
    setSettingsRequest(dispatch, data);
  }
};
