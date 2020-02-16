import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchResultsActions, searchResultsSelectors } from '../../redux';
import Loading from '../../components/Loading';
import MovieListItem from '../../components/MovieListItem';

function SearchResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchResults = useSelector(searchResultsSelectors.selectSearchResults);

  const clearSearchResults = useCallback(() => {
    dispatch(searchResultsActions.clearSearchResults());
  }, [dispatch]);

  return (
    <div className="App">
      <section className="popular-movies-container">
        <div className="search-results-list-header">
          <h3>Search Results</h3>
          <button className="clear-button" onClick={clearSearchResults}>
            Clear Results
          </button>
        </div>
        <div className="search-results-list">
          {searchResults.loading ? <Loading /> : null}
          {searchResults.list.map(movie => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              onClick={() => history.push(`/${movie.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default SearchResults;
