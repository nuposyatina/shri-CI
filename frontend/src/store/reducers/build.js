const initialState = {
  commitHash: '',
  buildId: null,
  buildNumber: null,
  status: null
};

const settings = (state = initialState, action) => {
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

export default settings;