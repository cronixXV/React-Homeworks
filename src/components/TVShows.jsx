import React from "react"
import { useFetchTVShows } from "./Hooks/useFetchTVShows.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Spinner, Alert } from "react-bootstrap"

const TVShows = () => {
  const { language } = useLanguage()
  const { tvShowsList, status, error } = useFetchTVShows(language)

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
        Популярные сериалы
      </h1>
      <MovieContainer movies={tvShowsList} />
    </Container>
  )
}

export default TVShows
