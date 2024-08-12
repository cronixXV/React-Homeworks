import React, { useState, useEffect } from "react"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const TVShowsContainer = styled.div`
  margin: 20px;
`

const TVShowsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export default function TVShows({ tvShows }) {
  return (
    <TVShowsContainer>
      <TVShowsTitle>Популярные сериалы</TVShowsTitle>
      <MovieContainer movies={tvShows} />
    </TVShowsContainer>
  )
}
