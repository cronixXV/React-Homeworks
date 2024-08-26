import React, { useEffect, useState } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import getRandomMovie from "../Helpers/getRandomMovie"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Button } from "react-bootstrap"
import moment from "moment"

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
    return <Container>Загрузка...</Container>
  }

  if (status === "failed") {
    return <Container>Ошибка: {error}</Container>
  }

  if (!Array.isArray(moviesList) || moviesList.length === 0) {
    return <Container>Нет данных для отображения</Container>
  }

  if (!randomMovie) {
    return <Container>Загрузка...</Container>
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "24px" }}
      >
        {randomMovie.title}
      </h1>
      <p className="lead mb-3">{randomMovie.overview}</p>
      <p className="text-muted">
        Дата выхода: {moment(randomMovie.release_date).format("DD.MM.YYYY")}
      </p>
      <Button
        variant="dark"
        className="mt-4"
        onClick={() => setRandomMovie(getRandomMovie(moviesList))}
      >
        Показать другой случайный фильм
      </Button>
    </Container>
  )
}
