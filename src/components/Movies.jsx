import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"
import { fetchMovies } from "../components/Reducers/Slices/moviesSlice"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const MoviesContainer = styled.div`
  margin: 20px;
`

const MoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const Movies = () => {
  const dispatch = useDispatch()
  const { language } = useLanguage()
  const movies = useSelector((state) => state.movies.moviesList)
  const moviesStatus = useSelector((state) => state.movies.status)
  const moviesError = useSelector((state) => state.movies.error)

  useEffect(() => {
    dispatch(fetchMovies(language))
  }, [dispatch, language])

  if (moviesStatus === "loading") {
    return <div>Загрузка...</div>
  }

  if (moviesStatus === "failed") {
    return <div>Ошибка: {moviesError}</div>
  }

  return (
    <MoviesContainer>
      <MoviesTitle>Популярные фильмы</MoviesTitle>
      <MovieContainer movies={movies} />
    </MoviesContainer>
  )
}

export default Movies
