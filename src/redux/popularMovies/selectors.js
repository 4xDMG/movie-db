export const selectPopularMovies = state => ({
  error: state.popularMovies.error,
  list: state.popularMovies.list,
  loading: state.popularMovies.loading,
});
