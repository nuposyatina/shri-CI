import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { LogString, BuildId } from 'backend/server';

const getLogsSuccess = (data: LogString) => ({
  type: 'GET_LOGS_SUCCESS',
  payload: {
    logs: data
  }
});

export const getLogs = (buildId: BuildId): ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    fetch(`http://localhost:3000/api/builds/${buildId}/log`).
    then((response) => {
      return response.text()
    }).
    then((result) => {
      dispatch(getLogsSuccess(result))})
  }
};
