import { combineReducers } from "@reduxjs/toolkit"
import moviesSlice from "./Slices/moviesSlice"
import tvShowsSlice from "./Slices/tvShowsSlice"
import searchMovieSlice from "./Slices/searchMovieSlice"

const rootReducer = combineReducers({
  movies: moviesSlice,
  searchMovie: searchMovieSlice,
  tvShows: tvShowsSlice,
})

export default rootReducer
