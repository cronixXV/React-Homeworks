import React from "react"
import { useSelector } from "react-redux"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const TVShowsContainer = styled.div`
  margin: 20px;
`

const TVShowsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const TVShows = () => {
  const tvShows = useSelector((state) => state.tvShows.tvShowsList)

  return (
    <TVShowsContainer>
      <TVShowsTitle>Популярные сериалы</TVShowsTitle>
      <MovieContainer movies={tvShows} />
    </TVShowsContainer>
  )
}

export default TVShows
