const initialState = '';

const logs = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_LOGS_SUCCESS':
      return action.payload.logs
    default:
      return state
  }
};

export default logs;