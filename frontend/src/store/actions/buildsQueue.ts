import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Build } from 'backend/server';

export type LimitOffsetParams = {
  limit: number | undefined,
  offset: number | undefined
}

const getQueryParams = ({ offset, limit }: LimitOffsetParams) => {
  if (!offset && !limit) return '';
  if (!offset && limit) return `?limit=${limit}`;
  if (!limit && offset) return `?offset=${offset}`;
  return `?offset=${offset}&limit=${limit}`;
};

const getBuildsSuccess = (builds: Build[]) => ({
  type: 'GET_BUILDS_SUCCESS',
  payload: {
    builds
  }
});

export const getBuilds = (params: LimitOffsetParams): ThunkAction<any, any, any, Action> => {
  return (dispatch: ThunkDispatch<any, any, Action>) => {
    const query = getQueryParams(params);
    fetch(`http://localhost:3000/api/builds${query}`).
    then((response) => response.json()).
    then((result) => {
      dispatch(getBuildsSuccess(result.data))
    })
  }
};
