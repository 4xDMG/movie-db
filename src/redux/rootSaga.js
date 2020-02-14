import { spawn } from 'redux-saga/effects';
import { saga as popularMovies } from './popularMovies';
import { saga as movieDetails } from './movieDetails';
import { saga as searchResults } from './searchResults';

function* rootSaga() {
  yield spawn(popularMovies);
  yield spawn(movieDetails);
  yield spawn(searchResults);
}

export default rootSaga;
