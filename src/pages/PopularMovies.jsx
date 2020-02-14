import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  popularMoviesActions,
  popularMoviesSelectors,
  searchResultsActions,
  searchResultsSelectors,
} from '../redux';
import { historyType } from '../propTypes';

function PopularMovies({ history }) {
  const dispatch = useDispatch();
  const popularMovies = useSelector(popularMoviesSelectors.selectPopularMovies);

  const getSearchResults = useCallback(
    e => dispatch(searchResultsActions.fetchSearchResults(e.target.value)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(popularMoviesActions.fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <input palceholder="Search" onChange={getSearchResults} />
      <ul>
        {popularMovies.list.map(movie => (
          <li key={movie.id} onClick={() => history.push(`/${movie.id}`)}>
            {movie.title}
          </li>
        ))}
      </ul>
      {popularMovies.loading ? 'Loading...' : null}
    </div>
  );
}

PopularMovies.propTypes = {
  history: historyType.isRequired,
};

export default PopularMovies;
