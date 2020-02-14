export const selectMovieDetails = movieId => state => ({
  error: state.movieDetails.error,
  data: state.movieDetails.data[movieId],
  loading: state.movieDetails.loading,
});
