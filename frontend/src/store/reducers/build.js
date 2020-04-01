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
    default:
      return state;
  };
};

export default settings;