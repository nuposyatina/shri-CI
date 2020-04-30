const getLogsSuccess = (data) => ({
  type: 'GET_LOGS_SUCCESS',
  payload: {
    logs: data
  }
});
export const getLogs = (buildId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/builds/${buildId}/log`).
    then((response) => {
      return response.text()
    }).
    then((result) => {
      dispatch(getLogsSuccess(result))})
  }
};
