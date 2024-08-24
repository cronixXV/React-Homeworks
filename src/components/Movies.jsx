import React from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const MoviesContainer = styled.div`
  margin: 20px;
`

const MoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const Movies = () => {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)

  if (status === "loading") {
    return <div>Загрузка...</div>
  }

  if (status === "failed") {
    return <div>Ошибка: {error}</div>
  }

  return (
    <MoviesContainer>
      <MoviesTitle>Популярные фильмы</MoviesTitle>
      <MovieContainer movies={moviesList} />
    </MoviesContainer>
  )
}

export default Movies
