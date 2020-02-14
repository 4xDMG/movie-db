import { combineReducers } from 'redux';
import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_ERROR,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from './types';

function error(state = null, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return null;
    case FETCH_MOVIE_DETAILS_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}

function data(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        [action.payload.movieId]: action.payload.movieDetails,
      };
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return true;
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ error, data, loading });
