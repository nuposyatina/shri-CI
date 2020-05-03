import { MainAction } from '.';

const initialState = {
  commitHash: '',
  buildId: null,
  buildNumber: null,
  status: null
};

const build = (state = initialState, action: MainAction) => {
  switch (action.type) {
    case 'SET_COMMIT_HASH':
      return {
        ...state,
        commitHash: action.payload.commitHash
      };
    case 'RUN_BUILD_SUCCESS':
      return {
        ...state,
        buildId: action.payload.id,
        buildNumber: action.payload.buildNumber,
        status: action.payload.status
      };
    default:
      return state;
  };
};

export default build;