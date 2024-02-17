// store.js

import { configureStore } from '@reduxjs/toolkit';
import  addToFavorites  from './slice/favorites';
import  removeFromFavorites  from './slice/favorites';
import moviesReducer   from './slice/movies' ;



const store =  configureStore({
  reducer: {
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
    movies: moviesReducer
  },

});

export default store;