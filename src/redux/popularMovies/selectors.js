export const selectPopularMovies = state => ({
  error: state.popularMovies.error,
  hasMore: state.popularMovies.hasMore,
  list: state.popularMovies.list,
  loading: state.popularMovies.loading,
});
