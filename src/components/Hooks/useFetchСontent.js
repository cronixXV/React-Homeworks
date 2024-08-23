import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../Reducers/Slices/moviesSlice"
import { fetchTvShows } from "../Reducers/Slices/tvShowsSlice"

export const useFetchContent = (type, language = "en-US") => {
  const dispatch = useDispatch()

  let contentList, status, error

  if (type === "movies") {
    contentList = useSelector((state) => state.movies.moviesList)
    status = useSelector((state) => state.movies.status)
    error = useSelector((state) => state.movies.error)
    useEffect(() => {
      dispatch(fetchMovies(language))
    }, [dispatch, language])
  } else if (type === "tvShows") {
    contentList = useSelector((state) => state.tvShows.tvShowsList)
    status = useSelector((state) => state.tvShows.status)
    error = useSelector((state) => state.tvShows.error)
    useEffect(() => {
      dispatch(fetchTvShows(language))
    }, [dispatch, language])
  }

  return { contentList, status, error }
}
