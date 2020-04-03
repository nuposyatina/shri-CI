const getBuildDetailsSuccess = (data) => ({
  type: 'GET_BUILD_DETAILS_SUCCESS',
  payload: {
    ...data
  }
});
export const getBuildDetails = (buildId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/builds/${buildId}`).
    then((response) => {
      return response.json()
    }).
    then((result) => dispatch(getBuildDetailsSuccess(result.data)))
  }
};
