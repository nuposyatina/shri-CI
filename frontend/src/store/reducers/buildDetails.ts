import { MainAction } from '.';

const initialState = {};

const buildDetails = (state = initialState, action: MainAction) => {
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