import { call, put, takeEvery } from 'redux-saga/effects';
import createMovieDbClient from '../../api/movieDb';
import { FETCH_POPULAR_MOVIES } from './types'
import { fetchPopularMoviesSuccess } from './actions'

const movieDbClient = new createMovieDbClient();

export default function*() {
  yield takeEvery(FETCH_POPULAR_MOVIES, doFetchPopularMovies)
}

function* doFetchPopularMovies() {
  const popularMovies = yield call(movieDbClient.getPopularMoviesList);

  console.log(popularMovies);
  yield put(fetchPopularMoviesSuccess(popularMovies))
}
