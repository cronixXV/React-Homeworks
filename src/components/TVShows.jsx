import React, { useState, useEffect } from "react"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const API_KEY = process.env.REACT_APP_API_KEY

const TVShowsContainer = styled.div`
  margin: 20px;
`

const TVShowsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export default function TVShows() {
  const [tvShows, setTvShows] = useState([])
  const [error, setError] = useState(null)

  const fetchTvShows = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ru&page=1`
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setTvShows(data.results)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchTvShows()
  }, [])

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <TVShowsContainer>
      <TVShowsTitle>Популярные сериалы</TVShowsTitle>
      <MovieContainer movies={tvShows} />
    </TVShowsContainer>
  )
}
