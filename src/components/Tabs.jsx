import React, { useState, useEffect } from "react"
import getRandomMovie from "../helpers/getRandomMovie"
import MovieContainer from "./MovieContainer.jsx"
import Tabs from "./Tabs.jsx"

const API_KEY = process.env.REACT_APP_API_KEY

export default function RandomMovie() {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [randomMovie, setRandomMovie] = useState(null)
  const [error, setError] = useState(null)
  const [sortedMovies, setSortedMovies] = useState([])

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
      setRandomMovie(getRandomMovie(data.results))
    } catch (error) {
      setError(error.message)
    }
  }

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
    fetchMovies()
    fetchTvShows()
  }, [])

  useEffect(() => {
    const sorted = [...movies].sort((a, b) => b.vote_count - a.vote_count)
    setSortedMovies(sorted)
  }, [movies])

  const handleClick = () => {
    if (movies.length > 0) {
      setRandomMovie(getRandomMovie(movies))
    }
  }

  if (!randomMovie) {
    return (
      <div>
        <button onClick={fetchMovies}>Загрузить фильмы</button>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>{randomMovie.title}</h1>
      <p>{randomMovie.overview}</p>
      <p>Дата выхода: {randomMovie.releaseDate}</p>
      <h1>Популярные фильмы</h1>
      <MovieContainer movies={sortedMovies} />
      <Tabs
        movies={sortedMovies}
        tvShows={tvShows}
      />
      <button onClick={handleClick}>Показать случайный фильм</button>
    </div>
  )
}
