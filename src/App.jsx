import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import createRouter from "./components/Routers/Routes.jsx"
import { LanguageProvider, useLanguage } from "./Helpers/LanguageContext.jsx"
import useFetch from "./components/Hooks/useFetch.js"
import styled from "styled-components"
import { save as saveMovies } from "./components/Reducers/Slices/moviesSlice"
import { save as saveTvShows } from "./components/Reducers/Slices/tvShowsSlice"

const API_KEY = process.env.REACT_APP_API_KEY

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`

const AppTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`

const App = () => {
  // const [movies, setMovies] = useState([])
  // const [tvShows, setTvShows] = useState([])
  // const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const { language } = useLanguage()

  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
    // getData: getMovies,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
  )

  const {
    data: tvShowsData,
    loading: tvShowsLoading,
    error: tvShowsError,
    // getData: getTvShows,
  } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
  )

  useEffect(() => {
    if (moviesData) {
      dispatch(saveMovies(moviesData.results))
    }
    if (tvShowsData) {
      dispatch(saveTvShows(tvShowsData.results))
    }
  }, [moviesData, tvShowsData, dispatch])

  // Приводит к бесконечным запросам, так как useEffect постоянно вызывает getMovies и getTvShows
  // useEffect(() => {
  //   getMovies(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
  //   )
  //   getTvShows(
  //     `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
  //   )
  // }, [language, getMovies, getTvShows])

  // const movies = moviesData ? moviesData.results : []
  // const tvShows = tvShowsData ? tvShowsData.results : []

  const movies = useSelector((state) => state.movies.moviesList)
  const tvShows = useSelector((state) => state.tvShows.tvShowsList)

  if (moviesError || tvShowsError) {
    return <div>Ошибка: {moviesError || tvShowsError}</div>
  }

  if (moviesLoading || tvShowsLoading) {
    return <div>Загрузка...</div>
  }

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
  //       )
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok")
  //       }
  //       const data = await response.json()
  //       setMovies(data.results)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //   }

  //   const fetchTvShows = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
  //       )
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok")
  //       }
  //       const data = await response.json()
  //       setTvShows(data.results)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //   }

  //   fetchMovies()
  //   fetchTvShows()
  // }, [language])

  // if (error) {
  //   return <div>Ошибка: {error}</div>
  // }

  return (
    <AppContainer>
      <AppTitle>Фильмы и Сериалы</AppTitle>
      <RouterProvider router={createRouter(movies, tvShows)} />
    </AppContainer>
  )
}

const AppWithLanguageProvider = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
)

export default AppWithLanguageProvider
