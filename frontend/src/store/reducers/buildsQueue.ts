import { MainAction } from '.';

const initialState = {
  builds: [],
  allBuildsLoaded: false
};

const buildsQueue = (state = initialState, action: MainAction) => {
  switch (action.type) {
    case 'GET_BUILDS_SUCCESS':
      const allBuildsLoaded = action.payload.builds.length === 0;
      return {
        ...state,
        builds: state.builds.concat(action.payload.builds),
        allBuildsLoaded
      }
    default:
      return state;
  };
};

export default buildsQueue;
