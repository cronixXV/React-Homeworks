import React from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Spinner, Alert } from "react-bootstrap"

const Movies = () => {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)

  if (status === "loading") {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      </Container>
    )
  }

  if (status === "failed") {
    return (
      <Container className="py-5">
        <Alert variant="danger">Ошибка: {error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "24px" }}
      >
        Популярные фильмы
      </h1>
      <MovieContainer movies={moviesList} />
    </Container>
  )
}

export default Movies
