import { createSlice } from "@reduxjs/toolkit"

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShowsList: [],
  },
  reducers: {
    save: (state, action) => {
      state.tvShowsList = action.payload
    },
  },
})

export const { save } = tvShowsSlice.actions

export default tvShowsSlice.reducer
