import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator to fetch movies from the API
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies', async (currentPage) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6d3c0b6f63323479c21ff2aa2b2d3c3c&page=${currentPage}`);
            return response.data.results; 
        } catch (error) {
            throw Error('Error fetching movies: ' + error.message);
        }
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            builder.addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            builder.addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moviesSlice.reducer;
