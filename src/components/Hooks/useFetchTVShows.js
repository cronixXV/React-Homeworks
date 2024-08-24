import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTvShows } from "../Reducers/Slices/tvShowsSlice"

export const useFetchTVShows = (language = "ru-RU") => {
  const dispatch = useDispatch()

  const tvShowsList = useSelector((state) => state.tvShows.tvShowsList)
  const status = useSelector((state) => state.tvShows.status)
  const error = useSelector((state) => state.tvShows.error)

  useEffect(() => {
    dispatch(fetchTvShows(language))
  }, [dispatch, language])

  return { tvShowsList, status, error }
}
