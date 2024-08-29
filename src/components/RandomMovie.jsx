import React, { useEffect, useState } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import getRandomMovie from "../Helpers/getRandomMovie"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Button } from "react-bootstrap"
import moment from "moment"
import { useTranslation } from "react-i18next"

export default function RandomMovie() {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [randomMovie, setRandomMovie] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (Array.isArray(moviesList) && moviesList.length > 0) {
      const sortedMovies = [...moviesList].sort(
        (a, b) => b.vote_count - a.vote_count
      )
      setRandomMovie(getRandomMovie(sortedMovies))
    }
  }, [moviesList])

  if (status === "loading" || !randomMovie) {
    return <Container>{t("randomMovie.loading")}</Container>
  }

  if (status === "failed") {
    return (
      <Container>
        {t("randomMovie.error")}: {error}
      </Container>
    )
  }

  if (!Array.isArray(moviesList) || moviesList.length === 0) {
    return <Container>{t("randomMovie.no_data")}</Container>
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
        {t("randomMovie.release_date")}:{" "}
        {moment(randomMovie.release_date).format("DD.MM.YYYY")}
      </p>
      <Button
        variant="dark"
        className="mt-4"
        onClick={() => setRandomMovie(getRandomMovie(moviesList))}
      >
        {t("randomMovie.show_another_random_movie")}
      </Button>
    </Container>
  )
}
