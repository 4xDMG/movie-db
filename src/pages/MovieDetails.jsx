import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsActions, movieDetailsSelectors } from '../redux';
import { historyType, matchType } from '../propTypes';
import { BackArrow } from '../assets';
import Loading from '../components/Loading';
import {
  BACKDROP_IMAGE_BASE_URL,
  POSTER_IMAGE_BASE_URL,
  formatDate,
  formatRuntime,
  voteAverageToPercentage,
} from '../utils';

function MovieDetails({ history, match }) {
  const selector = useCallback(
    movieDetailsSelectors.selectMovieDetails(match.params.movieId),
  );
  const dispatch = useDispatch();
  const movieDetails = useSelector(selector);

  useEffect(() => {
    if (!movieDetails.data) {
      dispatch(movieDetailsActions.fetchMovieDetails(match.params.movieId));
    }
  }, [dispatch, match, movieDetails.data]);

  const goBack = useCallback(() => history.goBack(), [history]);

  if (movieDetails.loading) return <Loading />;
  if (movieDetails.error)
    return (
      <div className="movie-details">
        <p>{movieDetails.error}</p>
      </div>
    );
  if (!movieDetails.data)
    return (
      <div className="movie-details">
        <p>No data for this movie id</p>
      </div>
    );

  const {
    backdrop_path,
    overview,
    poster_path,
    release_date,
    runtime,
    title,
    vote_average,
  } = movieDetails.data;

  return (
    <div className="movie-details">
      <div
        className="movie-details-header"
        style={{
          backgroundImage: `url(${BACKDROP_IMAGE_BASE_URL}${backdrop_path})`,
        }}
      />
      <div
        className="back-button"
        role="button"
        tabIndex="0"
        onClick={goBack}
        onKeyPress={goBack}
      >
        <BackArrow />
      </div>
      <div className="movie-details-info">
        <div className="movie-details-info-header">
          <img
            alt={title}
            className="movie-details-poster"
            src={`${POSTER_IMAGE_BASE_URL}${poster_path}`}
          />
          <h2>{title}</h2>
          <small>
            {formatDate(release_date, true)} &#8226;{'  '}
            {voteAverageToPercentage(vote_average)} User Score
          </small>
          <small>{formatRuntime(runtime)}</small>
        </div>

        <div className="divider" />

        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  history: historyType.isRequired,
  match: matchType.isRequired,
};

export default MovieDetails;
