const getQueryParams = ({ offset, limit }) => {
  if (!offset && !limit) return '';
  if (!offset && limit) return `?limit=${limit}`;
  if (!limit && offset) return `?offset=${offset}`;
  return `?offset=${offset}&limit=${limit}`;
};

export const getBuilds = (params) => {
  return (dispatch) => {
    const query = getQueryParams(params);
    fetch(`http://localhost:3000/api/builds${query}`).
    then((response) => response.json()).
    then((result) => {
      dispatch(getBuildsSuccess(result.data))
    })
  }
};

const getBuildsSuccess = (builds) => ({
  type: 'GET_BUILDS_SUCCESS',
  payload: {
    builds
  }
});
