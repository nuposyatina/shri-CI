const initialState = {};

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SETTINGS_STARTED':
      console.log(state)
      return {
        ...state,
        loading: true
      };
    case 'GET_SETTINGS_SUCCESS':
      return {
        loading: false,
        ...action.payload
      };
    case 'GET_SETTINGS_ERROR':
      return {
        loading: false,
        ...action.payload
      };
    default:
      return state;
  };
};

export default settings;