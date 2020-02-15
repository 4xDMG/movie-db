import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  popularMoviesActions,
  popularMoviesSelectors,
  searchResultsActions,
  searchResultsSelectors,
} from '../redux';
import { historyType } from '../propTypes';
import Loading from '../components/Loading';
import SearchHeader from '../components/SearchHeader';
import MovieListItem from '../components/MovieListItem';
import './style.css';

function PopularMovies({ history }) {
  const dispatch = useDispatch();
  const popularMovies = useSelector(popularMoviesSelectors.selectPopularMovies);

  const getPopularMovies = useCallback(
    () => dispatch(popularMoviesActions.fetchPopularMovies()),
    [dispatch],
  );

  const getSearchResults = useCallback(
    e => dispatch(searchResultsActions.fetchSearchResults(e.target.value)),
    [dispatch],
  );

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <div className="App">
      <SearchHeader onChange={getSearchResults} />
      <section className="popular-movies-container">
        <h3>Popular Movies</h3>
        <InfiniteScroll
          className="popular-movies-list"
          dataLength={popularMovies.list.length}
          endMessage={<p>No more popular movies</p>}
          hasMore={popularMovies.hasMore}
          next={getPopularMovies}
        >
          {popularMovies.list.map(movie => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              onClick={() => history.push(`/${movie.id}`)}
            />
          ))}
        </InfiniteScroll>
        {popularMovies.loading ? <Loading /> : null}
      </section>
    </div>
  );
}

PopularMovies.propTypes = {
  history: historyType.isRequired,
};

export default PopularMovies;
