import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchMovie } from "../Reducers/Slices/searchMovieSlice"

export const useFetchSearchMovie = (movie) => {
  const dispatch = useDispatch()

  const searchMovieList = useSelector(
    (state) => state.searchMovie.searchMovieList
  )
  const status = useSelector((state) => state.searchMovie.status)
  const error = useSelector((state) => state.searchMovie.error)

  useEffect(() => {
    if (movie) {
      dispatch(fetchSearchMovie(movie))
    }
  }, [dispatch, movie])

  return { searchMovieList, status, error }
}
