class MovieDbClient {
  constructor() {
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

    this.popularPage = 1;
    this.hasMorePopular = true;

    this.searchPage = 1;
    this.lastQuery = '';
  }

  /**
   * builds query string parameters from object containing key: value pairs
   * @param queryStringParameters {{ [key:string]: [value: string || number || boolean] }}
   */
  buildQueryStringParameters = queryStringParameters =>
    Object.entries(queryStringParameters).reduce(
      (acc, [key, value]) => `${acc}&${key}=${encodeURIComponent(value)}`,
      '',
    );

  /**
   * Returns a valid URL for MovieDB API
   * @param pathParameters {string} - containing desired path parameters
   * @param queryStringParameters {object} - containing key: value pairs to insert into query string
   */
  buildURL = (pathParameters, queryStringParameters = {}) =>
    `${this.BASE_URL}${pathParameters}?api_key=${
      this.API_KEY
    }${this.buildQueryStringParameters(queryStringParameters)}`;

  makeFetchRequest = async (url, errorMsg, method = 'GET') => {
    const response = await fetch(url, { method });

    if (!response.ok) throw new Error(errorMsg);

    return await response.json();
  };

  /**
   * Returns details about requested movie
   * @param movieId {integer}
   */
  getMovieDetails = async movieId =>
    this.makeFetchRequest(
      this.buildURL(`movie/${movieId}`, 'Failed to fetch movie details'),
    );

  /**
   * Return list of popular movies by page
   */
  getPopularMoviesList = async () => {
    if (this.hasMorePopular) {
      const response = await this.makeFetchRequest(
        this.buildURL('movie/popular', { page: this.popularPage + 1 }),
        'Failed to fetch popular movies list',
      );
      this.popularPage = response.page;
      if (this.popularPage === response.total_pages) {
        this.hasMorePopular = false;
      }

      return { list: response.results, hasMore: this.hasMorePopular };
    }
    return { list: [], hasMore: this.hasMorePopular };
  };

  /**
   * returns list of search results by page
   */
  searchMovies = async query => {
    if (query !== this.lastQuery) {
      this.searchPage = 1;
    }

    const response = await this.makeFetchRequest(
      this.buildURL('search/movie', { page: this.searchPage, query }),
      'Failed to fetch search results',
    );

    this.searchPage = response.page + 1;

    return response.results;
  };
}

export default MovieDbClient;
