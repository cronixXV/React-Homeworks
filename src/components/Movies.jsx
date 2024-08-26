import React from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

export default function Movies() {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)

  if (status === "loading") {
    return <div className="text-center mt-5">Загрузка...</div>
  }

  if (status === "failed") {
    return <div className="text-center mt-5">Ошибка: {error}</div>
  }

  return (
    <div className="container mt-5">
      <h1
        className="mb-4"
        style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
      >
        Популярные фильмы
      </h1>
      <MovieContainer movies={moviesList} />
    </div>
  )
}
