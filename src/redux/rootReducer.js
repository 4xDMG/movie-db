import { combineReducers } from 'redux';
import { popularMovies } from './popularMovies';
import { movieDetails } from './movieDetails';
import { searchResults } from './searchResults';

const rootReducer = combineReducers({
  popularMovies,
  movieDetails,
  searchResults,
});

export default rootReducer;
