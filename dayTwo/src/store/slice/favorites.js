import { createSlice } from '@reduxjs/toolkit';




const favoritesSlice = createSlice({
    name: 'favoriteMovies',
    initialState: [],
    reducers: {
        addToFavorites(state, action) {
            console.log("FavExcecute...")
            console.log(action.payload)
            
            state.push(action.payload);
        },
        removeFromFavorites(state, action) {
            return state.filter(movie => movie.id !== action.payload);
        },
    },
    
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

