import { call, put, takeEvery } from 'redux-saga/effects';
import createMovieDbClient from '../../api/movieDb';
import { FETCH_POPULAR_MOVIES } from './types';
import { fetchPopularMoviesError, fetchPopularMoviesSuccess } from './actions';

const movieDbClient = new createMovieDbClient();

export default function*() {
  yield takeEvery(FETCH_POPULAR_MOVIES, doFetchPopularMovies);
}

function* doFetchPopularMovies() {
  try {
    const popularMovies = yield call(movieDbClient.getPopularMoviesList);

    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (err) {
    console.error(err);

    yield put(
      fetchPopularMoviesError(
        'Something went wrong. We were unable to get the popular movies list.',
      ),
    );
  }
}
