import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_ERROR,
  FETCH_POPULAR_MOVIES_SUCCESS,
} from './types';

export const fetchPopularMovies = () => ({
  type: FETCH_POPULAR_MOVIES,
  payload: {},
});

export const fetchPopularMoviesSuccess = movies => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchPopularMoviesError = error => ({
  type: FETCH_POPULAR_MOVIES_ERROR,
  payload: { error },
});
