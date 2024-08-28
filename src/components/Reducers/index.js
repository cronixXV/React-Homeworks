import { combineReducers } from "@reduxjs/toolkit"
import moviesSlice from "./Slices/moviesSlice"
import tvShowsSlice from "./Slices/tvShowsSlice"
import searchMovieSlice from "./Slices/searchMovieSlice"
import authSlice from "./Slices/authSlice"

const rootReducer = combineReducers({
  movies: moviesSlice,
  searchMovie: searchMovieSlice,
  tvShows: tvShowsSlice,
  auth: authSlice,
})

export default rootReducer
