import React, { useState, useEffect } from "react"
import getRandomMovie from "../helpers/getRandomMovie"
import styled from "styled-components"

const API_KEY = process.env.REACT_APP_API_KEY

const RandomMovieContainer = styled.div`
  margin: 20px;
`

const RandomMovieTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const RandomMovieOverview = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const RandomMovieReleaseDate = styled.p`
  font-size: 14px;
  color: #666;
`

const RandomMovieButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`

export default function RandomMovie() {
  const [randomMovie, setRandomMovie] = useState(null)
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([])

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

  const fetchRandomMovie = () => {
    if (movies.length > 0) {
      const sortedMovies = [...movies].sort(
        (a, b) => b.vote_count - a.vote_count
      )
      setRandomMovie(getRandomMovie(sortedMovies))
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    fetchRandomMovie()
  }, [movies])

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  if (!randomMovie) {
    return <div>Загрузка...</div>
  }

  return (
    <RandomMovieContainer>
      <RandomMovieTitle>{randomMovie.title}</RandomMovieTitle>
      <RandomMovieOverview>{randomMovie.overview}</RandomMovieOverview>
      <RandomMovieReleaseDate>
        Дата выхода: {randomMovie.release_date}
      </RandomMovieReleaseDate>
      <RandomMovieButton onClick={fetchRandomMovie}>
        Показать другой случайный фильм
      </RandomMovieButton>
    </RandomMovieContainer>
  )
}
