import { combineReducers } from 'redux';
import {
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_ERROR,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from './types';

function error(state = null, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return null;
    case FETCH_SEARCH_RESULTS_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return [...state, ...action.payload.movies];
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return true;
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ error, list, loading });
