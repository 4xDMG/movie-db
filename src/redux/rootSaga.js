import { spawn } from 'redux-saga/effects';
import { saga as popularMovies } from './popularMovies';
import { saga as movieDetails } from './movieDetails';

function* rootSaga() {
  yield spawn(popularMovies);
  yield spawn(movieDetails);
}

export default rootSaga;
