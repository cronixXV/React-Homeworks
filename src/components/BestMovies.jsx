import React, { useState, useEffect } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

export default function BestMovies() {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    if (Array.isArray(moviesList) && moviesList.length > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * moviesList.length)
        setCurrentMovie(moviesList[randomIndex])
      }, 3000)

      return () => clearInterval(intervalId)
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

  if (!currentMovie) {
    return <div className="text-center mt-5">Загрузка...</div>
  }

  return (
    <div className="container mt-5">
      <h2
        className="mb-4"
        style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
      >
        {currentMovie.title || currentMovie.name}
      </h2>
    </div>
  )
}
