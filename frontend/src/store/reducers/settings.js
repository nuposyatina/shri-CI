const initialState = {
  loading: false,
  isLoad: false
};

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SETTINGS_STARTED':
      console.log(state)
      return {
        ...state,
        loading: true,
        isLoad: false
      };
    case 'GET_SETTINGS_SUCCESS':
      return {
        loading: false,
        isLoad: true,
        ...action.payload
      };
    case 'GET_SETTINGS_ERROR':
      return {
        loading: false,
        isLoad: true,
        ...action.payload
      };
    default:
      return state;
  };
};

export default settings;