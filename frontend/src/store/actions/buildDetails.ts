import { BuildId, Build } from 'backend/server';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const getBuildDetailsSuccess = (data: Build) => ({
  type: 'GET_BUILD_DETAILS_SUCCESS',
  payload: {
    ...data
  }
});

export const getBuildDetails = (buildId: BuildId): ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    fetch(`http://localhost:3000/api/builds/${buildId}`).
    then((response) => {
      return response.json()
    }).
    then((result) => dispatch(getBuildDetailsSuccess(result.data)))
  }
};
