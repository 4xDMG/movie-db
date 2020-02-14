import { spawn } from 'redux-saga/effects';
import { saga as popularMovies } from './popularMovies'; 

function* rootSaga() {
  yield spawn(popularMovies);
}

export default rootSaga;
