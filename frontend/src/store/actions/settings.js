const request = (dispatch, actions, url, options = {}) => {
  dispatch(actions.requestStarted());
  fetch(url, options).
  then((response) => {
    return response.json();
  }).
  then((data) => {
    dispatch(actions.requestSuccess(data));
  }).
  catch(err => {
    dispatch(actions.requestError(err));
  });
}

export const getSettings = () => {
  return (dispatch) => {
    dispatch(getSettingsStarted());
    fetch('http://localhost:3000/api/settings').
    then(res => res.json()).
    then(body => {
      const data = body.data ? body.data : body;
      return dispatch(getSettingsSuccess(data));
    }).
    catch(err => dispatch(getSettingsError(err)));
  }
};

const getSettingsStarted = () => ({
  type: 'GET_SETTINGS_STARTED'
});

const getSettingsSuccess = (settings) => ({
  type: 'GET_SETTINGS_SUCCESS',
  payload: {
    ...settings
  }
});

const getSettingsError = (error) => ({
  type: 'GET_SETTINGS_ERROR',
  payload: {
    error
  }
});
