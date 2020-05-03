import { history } from 'store/configureStore';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { CommitHash, BuildInfoResponse } from 'backend/server';

const setCommitHash = (commitHash: CommitHash) => ({
  type: 'SET_COMMIT_HASH',
  payload: {
    commitHash
  }
});

const runBuildSuccess = ({ data }: BuildInfoResponse) => ({
  type: 'RUN_BUILD_SUCCESS',
  payload: {
    ...data
  }
});

export const runBuild = (hash: CommitHash): ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    dispatch(setCommitHash(hash));
    fetch(`http://localhost:3000/api/builds/${hash}`, {
      method: 'POST',
    }).
    then((response) => response.json()).
    then((result) => {
      dispatch(runBuildSuccess(result));
      history.push(`/build/${result.data.buildNumber}`);
    });
  }
}
