const initialState = {};

const buildDetails = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_BUILD_DETAILS_SUCCESS':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      }
    default:
      return state
  }
};

export default buildDetails;