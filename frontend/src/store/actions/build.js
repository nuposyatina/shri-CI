

export const runBuild = (hash) => {
  dispatch(setCommitHash(hash));
  fetch('http://localhost:3000/api/settings', {
    method: 'POST',
  }).
  then((response) => response.json()).
  then((result) => console.log(result));
}

const setCommitHash = (commitHash) => ({
  type: 'SET_COMMIT_HASH',
  payload: {
    commitHash
  }
});
