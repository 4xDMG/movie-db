import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popularMoviesActions, searchResultsSelectors } from '../../redux';
import SearchHeader from '../../components/SearchHeader';
import PopularMoviesList from './PopularMoviesList';
import SearchResultsList from './SearchResultsList';
import '../style.css';

function Home() {
  const dispatch = useDispatch();
  const searchResults = useSelector(searchResultsSelectors.selectSearchResults);

  useEffect(() => {
    dispatch(popularMoviesActions.fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <SearchHeader />
      <section className="popular-movies-container">
        {searchResults.list.length || searchResults.loading ? (
          <SearchResultsList />
        ) : (
          <PopularMoviesList />
        )}
      </section>
    </div>
  );
}

export default Home;
