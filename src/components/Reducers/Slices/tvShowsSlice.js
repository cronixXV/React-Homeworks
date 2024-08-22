import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchTvShows = createAsyncThunk(
  "tvShows/fetchTvShows",
  async (language) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
    )
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data.results
  }
)

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShowsList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.tvShowsList = action.payload
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch TV shows"
      })
  },
})

export default tvShowsSlice.reducer
