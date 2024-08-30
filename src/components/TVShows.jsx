import React from "react"
import { useFetchTVShows } from "./Hooks/useFetchTVShows.js"
import MovieContainer from "./MovieContainer.jsx"
import { useTranslation } from "react-i18next"
import { Container, Spinner, Alert } from "react-bootstrap"

const TVShows = () => {
  const { t } = useTranslation() // Подключаем useTranslation для использования переводов
  const { tvShowsList, status, error } = useFetchTVShows()

  if (status === "loading") {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner
          animation="border"
          role="status"
        >
          <span className="visually-hidden">{t("tvShows.loading")}</span>{" "}
        </Spinner>
      </Container>
    )
  }

  if (status === "failed") {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {t("tvShows.error")}: {error}
        </Alert>{" "}
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "24px" }}
      >
        {t("tvShows.popular_tv_shows")}
      </h1>
      <MovieContainer movies={tvShowsList} />
    </Container>
  )
}

export default TVShows
