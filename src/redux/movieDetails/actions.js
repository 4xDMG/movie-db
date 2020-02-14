import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_ERROR,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from './types';

export const fetchMovieDetails = movieId => ({
  type: FETCH_MOVIE_DETAILS,
  payload: { movieId },
});

export const fetchMovieDetailsSuccess = (movieId, movieDetails) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload: { movieId, movieDetails },
});

export const fetchMovieDetailsError = error => ({
  type: FETCH_MOVIE_DETAILS_ERROR,
  payload: { error },
});
