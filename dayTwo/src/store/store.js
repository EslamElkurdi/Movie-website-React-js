// store.js

import { configureStore } from '@reduxjs/toolkit';
import  addToFavorites  from './slice/favorites';
import  removeFromFavorites  from './slice/favorites';


const store =  configureStore({
  reducer: {
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  },
});

export default store;