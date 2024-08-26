import React, { useEffect, useState } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import getRandomMovie from "../Helpers/getRandomMovie"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

export default function RandomMovie() {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [randomMovie, setRandomMovie] = useState(null)

  useEffect(() => {
    if (Array.isArray(moviesList) && moviesList.length > 0) {
      const sortedMovies = [...moviesList].sort(
        (a, b) => b.vote_count - a.vote_count
      )
      setRandomMovie(getRandomMovie(sortedMovies))
    }
  }, [moviesList])

  if (status === "loading") {
    return <div className="text-center mt-5">Загрузка...</div>
  }

  if (status === "failed") {
    return <div className="text-center mt-5">Ошибка: {error}</div>
  }

  if (!Array.isArray(moviesList) || moviesList.length === 0) {
    return <div className="text-center mt-5">Нет данных для отображения</div>
  }

  if (!randomMovie) {
    return <div className="text-center mt-5">Загрузка...</div>
  }

  return (
    <div className="container mt-5">
      <h1
        className="mb-4"
        style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
      >
        {randomMovie.title}
      </h1>
      <p
        className="mb-3"
        style={{ fontSize: "16px" }}
      >
        {randomMovie.overview}
      </p>
      <p
        className="mb-4"
        style={{ fontSize: "14px", color: "#666" }}
      >
        Дата выхода: {randomMovie.release_date}
      </p>
      <button
        className="btn btn-dark"
        style={{ fontSize: "16px", marginTop: "20px" }}
        onClick={() => setRandomMovie(getRandomMovie(moviesList))}
      >
        Показать другой случайный фильм
      </button>
    </div>
  )
}
