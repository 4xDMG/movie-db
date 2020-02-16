import { combineReducers } from 'redux';
import {
  CLEAR_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_ERROR,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from './types';

function error(state = null, action) {
  switch (action.type) {
    case CLEAR_SEARCH_RESULTS:
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
    case CLEAR_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return true;
    case CLEAR_SEARCH_RESULTS:
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ error, list, loading });
