import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { popularMoviesActions, popularMoviesSelectors } from '../../redux';
import Loading from '../../components/Loading';
import MovieListItem from '../../components/MovieListItem';

function PopularMovies() {
  const dispatch = useDispatch();
  const history = useHistory();
  const popularMovies = useSelector(popularMoviesSelectors.selectPopularMovies);

  const getPopularMovies = useCallback(() => {
    dispatch(popularMoviesActions.fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
}

export default PopularMovies;
