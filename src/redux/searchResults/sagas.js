import { call, put, takeLatest } from 'redux-saga/effects';
import createMovieDbClient from '../../api/movieDb';
import { FETCH_SEARCH_RESULTS } from './types';
import { fetchSearchResultsError, fetchSearchResultsSuccess } from './actions';

const movieDbClient = new createMovieDbClient();

export default function*() {
  yield takeLatest(FETCH_SEARCH_RESULTS, doFetchSearchResults);
}

function* doFetchSearchResults({ payload: { query } }) {
  try {
    const searchResults = yield call(movieDbClient.searchMovies, query);

    yield put(fetchSearchResultsSuccess(searchResults));
  } catch (err) {
    console.error(err);

    yield put(
      fetchSearchResultsError(
        'Something went wrong. We were unable to your search results.',
      ),
    );
  }
}
