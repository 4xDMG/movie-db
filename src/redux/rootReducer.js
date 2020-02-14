import { combineReducers } from 'redux';
import { popularMovies } from './popularMovies';
import { movieDetails } from './movieDetails';

const rootReducer = combineReducers({ popularMovies, movieDetails });

export default rootReducer;
