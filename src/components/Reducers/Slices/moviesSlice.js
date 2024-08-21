import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
  },
  reducers: {
    save: (state, action) => {
      state.moviesList = action.payload
    },
  },
})

export const { save } = moviesSlice.actions

export default moviesSlice.reducer
