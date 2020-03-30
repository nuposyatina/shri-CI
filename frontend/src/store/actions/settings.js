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
  const actions = {
    requestStarted: getSettingsStarted,
    requestSuccess: getSettingsSuccess,
    requestError: getSettingsError
  };
  return (dispatch) => request(dispatch, actions, 'http://localhost:3000/api/settings');
};

export const setSettings = (data) => {
  const actions = {
    requestStarted: setSettingsStarted,
    requestSuccess: setSettingsSuccess,
    requestError: setSettingsError
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return (dispatch) => {
    dispatch(setSettingsStarted());
    fetch('http://localhost:3000/api/settings', options).
    then((response) => {
      if (response.status === 200) {
        console.log(data)
        dispatch(setSettingsSuccess(data))
      }
    })
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

const setSettingsStarted = () => ({
  type: 'SET_SETTINGS_STARTED'
});

const setSettingsSuccess = (data) => ({
  type: 'SET_SETTINGS_SUCCESS',
  payload: {
    ...data
  }
});

const setSettingsError = () => ({
  type: 'SET_SETTINGS_ERROR'
})