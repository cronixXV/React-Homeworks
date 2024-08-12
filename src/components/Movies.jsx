import React, { useState, useEffect } from "react"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"

const API_KEY = process.env.REACT_APP_API_KEY

const MoviesContainer = styled.div`
  margin: 20px;
`

const MoviesTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru&page=1`
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <MoviesContainer>
      <MoviesTitle>Популярные фильмы</MoviesTitle>
      <MovieContainer movies={movies} />
    </MoviesContainer>
  )
}
