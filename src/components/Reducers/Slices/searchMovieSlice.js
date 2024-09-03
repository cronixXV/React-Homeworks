import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API_KEY = process.env.REACT_APP_API_KEY
const REACT_APP_SEARCH_URL = process.env.REACT_APP_SEARCH_URL

export const fetchSearchMovie = createAsyncThunk(
  "searchMovie/fetchSearchMovie",
  async (query) => {
    const LANGUAGE_CODE = "ru"
    const response = await fetch(
      `${REACT_APP_SEARCH_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${LANGUAGE_CODE}`
    )
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data.results
  }
)

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    searchMovieList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovie.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.searchMovieList = action.payload
      })
      .addCase(fetchSearchMovie.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch search movie"
      })
  },
})

export default searchMovieSlice.reducer
