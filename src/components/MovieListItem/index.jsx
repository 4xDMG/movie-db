import React from 'react';
import formatDate from '../../utils/formatDate';
import './style.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

function selectRatingBackgroundColor(voteAverage) {
  switch (true) {
    case voteAverage > 6.6:
      return '#01D277';
    case voteAverage > 3.3:
      return '#4902A3';
    default:
      return '#D1225B';
  }
}

const voteAverageToPercentage = voteAverage =>
  `${Math.round(voteAverage * 10)}%`;

function MovieListItem({ movie, onClick }) {
  return (
    <div
      className="movie-list-item"
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div className="movie-list-item-image-container">
        <img
          alt={movie.title}
          className="movie-list-item-image"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        />
        <span
          className="movie-rating"
          style={{
            backgroundColor: selectRatingBackgroundColor(movie.vote_average),
          }}
        >
          {voteAverageToPercentage(movie.vote_average)}
        </span>
      </div>
      <p>{movie.title}</p>
      <small>{formatDate(movie.release_date)}</small>
    </div>
  );
}

export default MovieListItem;
