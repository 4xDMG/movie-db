export const selectSearchResults = state => ({
  error: state.searchResults.error,
  list: state.searchResults.list,
  loading: state.searchResults.loading,
});
