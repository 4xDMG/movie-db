import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import PopularMovies from './pages/PopularMovies';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/:movieId" component={MovieDetails} />
          <Route path="/" component={PopularMovies} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
