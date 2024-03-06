import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice ({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
    },

    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTopRatingMovies : (state, action) => {
            state.addTopRatingMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.addUpComingMovies = action.payload;
        },
        addGenreMovies : (state, action) => {
            state.addGenreMovies = action.payload;
        }
    }
})


export default moviesSlice.reducer;
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatingMovies,addUpComingMovies, addGenreMovies} = moviesSlice.actions;