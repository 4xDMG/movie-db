import { call, put, takeEvery } from 'redux-saga/effects';
import createMovieDbClient from '../../api/movieDb';
import { FETCH_MOVIE_DETAILS } from './types';
import { fetchMovieDetailsError, fetchMovieDetailsSuccess } from './actions';

const movieDbClient = new createMovieDbClient();

export default function*() {
  yield takeEvery(FETCH_MOVIE_DETAILS, doFetchMovieDetails);
}

function* doFetchMovieDetails({ payload: { movieId } }) {
  try {
    const movieDetails = yield call(movieDbClient.getMovieDetails, movieId);

    yield put(fetchMovieDetailsSuccess(movieId, movieDetails));
  } catch (err) {
    console.error(err);

    yield put(
      fetchMovieDetailsError(
        'Something went wrong. We were unable to get details for this movie.',
      ),
    );
  }
}
