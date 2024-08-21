import React from "react"
import { useSelector } from "react-redux"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const MoviesContainer = styled.div`
  margin: 20px;
`

const MoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const Movies = () => {
  const movies = useSelector((state) => state.movies.moviesList)

  return (
    <MoviesContainer>
      <MoviesTitle>Популярные фильмы</MoviesTitle>
      <MovieContainer movies={movies} />
    </MoviesContainer>
  )
}

export default Movies
