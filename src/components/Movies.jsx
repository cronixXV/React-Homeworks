import React, { useState, useEffect } from "react"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const MoviesContainer = styled.div`
  margin: 20px;
`

const MoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export default function Movies({ movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>Популярные фильмы</MoviesTitle>
      <MovieContainer movies={movies} />
    </MoviesContainer>
  )
}
