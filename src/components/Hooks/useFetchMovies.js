import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../Reducers/Slices/moviesSlice"

export const useFetchMovies = (language = "ru-RU") => {
  const dispatch = useDispatch()

  const moviesList = useSelector((state) => state.movies.moviesList)
  const status = useSelector((state) => state.movies.status)
  const error = useSelector((state) => state.movies.error)

  useEffect(() => {
    dispatch(fetchMovies(language))
  }, [dispatch, language])

  return { moviesList, status, error }
}
