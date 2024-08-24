import { combineReducers } from "@reduxjs/toolkit"
import moviesSlice from "./Slices/moviesSlice"
import tvShowsSlice from "./Slices/tvShowsSlice"

const rootReducer = combineReducers({
  movies: moviesSlice,
  tvShows: tvShowsSlice,
})

export default rootReducer
