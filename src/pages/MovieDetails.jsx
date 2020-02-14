import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsActions, movieDetailsSelectors } from '../redux';

function MovieDetails({ match }) {
  const selector = useCallback(
    movieDetailsSelectors.selectMovieDetails(match.params.movieId),
  );
  const dispatch = useDispatch();
  const movieDetails = useSelector(selector);
  console.log(match);

  useEffect(() => {
    if (!movieDetails.data) {
      dispatch(movieDetailsActions.fetchMovieDetails(match.params.movieId));
    }
  }, [dispatch, match, movieDetails.data]);

  console.log(movieDetails);

  return (
    <div>
      {movieDetails.data ? <h3>{movieDetails.data.title}</h3> : null}
      {movieDetails.loading ? 'Loading...' : null}
    </div>
  );
}

export default MovieDetails;
