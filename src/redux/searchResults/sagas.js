import { call, put, throttle } from 'redux-saga/effects';
import createMovieDbClient from '../../api/movieDb';
import { FETCH_SEARCH_RESULTS } from './types';
import { fetchSearchResultsError, fetchSearchResultsSuccess } from './actions';

const movieDbClient = new createMovieDbClient();

export default function*() {
  yield throttle(2000, FETCH_SEARCH_RESULTS, doFetchSearchResults);
}

function* doFetchSearchResults({ payload: { query } }) {
  try {
    if (query.length > 2) {
      const searchResults = yield call(movieDbClient.searchMovies, query);

      yield put(fetchSearchResultsSuccess(searchResults));
    }
  } catch (err) {
    console.error(err);

    yield put(
      fetchSearchResultsError(
        'Something went wrong. We were unable to your search results.',
      ),
    );
  }
}
