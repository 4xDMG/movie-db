import { combineReducers } from 'redux';
import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_ERROR,
  FETCH_POPULAR_MOVIES_SUCCESS,
} from './types';

function error(state = null, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return null;
    case FETCH_POPULAR_MOVIES_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}

function hasMore(state = true, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return action.payload.hasMore;
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return [...state, ...action.payload.movies];
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return true;
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ error, hasMore, list, loading });
