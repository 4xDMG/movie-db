import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import createMovieDbClient from './api/movieDb';
import PopularMovies from './pages/PopularMovies';

const movieDbClient = new createMovieDbClient();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PopularMovies} />
        </Switch>
      </BrowserRouter>
    
    </Provider>
  );
}

export default App;
