import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (language) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
    )
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data.results
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.moviesList = action.payload
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch movies"
      })
  },
})

export default moviesSlice.reducer
