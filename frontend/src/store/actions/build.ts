import { history } from 'store/configureStore';

export const runBuild = (hash) => {
  return (dispatch) => {
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

const setCommitHash = (commitHash) => ({
  type: 'SET_COMMIT_HASH',
  payload: {
    commitHash
  }
});

const runBuildSuccess = ({ data }) => ({
  type: 'RUN_BUILD_SUCCESS',
  payload: {
    ...data
  }
});
