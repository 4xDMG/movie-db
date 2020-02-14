import  * as popularMoviesSelectors from './selectors';
import * as popularMoviesActions from './actions';

export { default as saga} from './sagas'
export { popularMoviesSelectors };
export { popularMoviesActions };
export { default as popularMovies } from './reducers';