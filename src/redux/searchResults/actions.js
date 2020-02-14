import {
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_ERROR,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from './types';

export const fetchSearchResults = query => ({
  type: FETCH_SEARCH_RESULTS,
  payload: { query },
});

export const fetchSearchResultsSuccess = movies => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: { movies },
});

export const fetchSearchResultsError = error => ({
  type: FETCH_SEARCH_RESULTS_ERROR,
  payload: { error },
});
