import React from 'react';
import Button from '../Button';
import formatDate from '../../utils/formatDate';
import { POSTER_IMAGE_BASE_URL, voteAverageToPercentage } from '../../utils';
import './style.css';

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

function MovieListItem({ movie, onClick }) {
  return (
    <Button className="movie-list-item" onClick={onClick}>
      <div className="movie-list-item-image-container">
        <img
          alt={movie.title}
          className="movie-list-item-image"
          src={`${POSTER_IMAGE_BASE_URL}${movie.poster_path}`}
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
    </Button>
  );
}

export default MovieListItem;
