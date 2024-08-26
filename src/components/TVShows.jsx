import React from "react"
import { useFetchTVShows } from "./Hooks/useFetchTVShows.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

export default function TVShows() {
  const { language } = useLanguage()
  const { tvShowsList, status, error } = useFetchTVShows(language)

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
        Популярные сериалы
      </h1>
      <MovieContainer movies={tvShowsList} />
    </div>
  )
}
