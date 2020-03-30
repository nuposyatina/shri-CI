const initialState = {
  loading: false,
  isLoad: false,
  isSaved: true
};

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SETTINGS_STARTED':
      console.log(state)
      return {
        ...state,
        loading: true,
        isLoad: false,
        isSaved: true
      };
    case 'GET_SETTINGS_SUCCESS':
      const data = action.payload.data ? action.payload.data : action.payload;
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...data
      };
    case 'GET_SETTINGS_ERROR':
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...action.payload
      };
    case 'SET_SETTINGS_STARTED':
      return {
        loading: true,
        isLoad: false,
        isSaved: false
      };
    case 'SET_SETTINGS_SUCCESS':
      console.log(action.payload)
      return {
        loading: false,
        isLoad: true,
        isSaved: true,
        ...action.payload
      }
    default:
      return state;
  };
};

export default settings;