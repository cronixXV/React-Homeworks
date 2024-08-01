import React, { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length)
  return movies[randomIndex]
}

export default function RandomMovie() {
  const [movies, setMovies] = useState([])
  const [randomMovie, setRandomMovie] = useState(null)

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
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if (!randomMovie) {
    return (
      <div>
        <button onClick={fetchMovies}>Загрузить фильмы</button>
      </div>
    )
  }

  return (
    <div>
      <h1>{randomMovie.title}</h1>
      <p>{randomMovie.overview}</p>
      <p>Дата выхода: {randomMovie.releaseDate}</p>

      <button onClick={handleClick}>Показать случайный фильм</button>
    </div>
  )
}
