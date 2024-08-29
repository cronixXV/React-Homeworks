import React, { useState } from "react"
import { Container, Button } from "react-bootstrap"
import { DebouncedInput } from "./DebouncedInput.jsx"
import { useTranslation } from "react-i18next"

export default function SearchMovie({ onSearch, onReset }) {
  const [movie, setMovie] = useState("")
  const { t } = useTranslation()

  const handleSearch = () => {
    onSearch(movie)
  }

  const handleReset = () => {
    setMovie("")
    onReset()
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "22px" }}
      >
        {t("searchMovie.search_movies_by_title")}
      </h1>
      <DebouncedInput
        type="text"
        placeholder={t("searchMovie.movie_title")}
        value={movie}
        onChange={(e) => {
          setMovie(e) // Обновляем состояние
          onSearch(e) // Выполняем поиск
        }}
        className="form-control"
      />
      <Button
        className="mt-3"
        variant="primary"
        onClick={handleSearch}
      >
        {t("searchMovie.search")}
      </Button>
      <Button
        className="mt-3"
        variant="secondary"
        onClick={handleReset}
        style={{ marginLeft: "10px" }}
      >
        {t("searchMovie.reset_search")}
      </Button>
    </Container>
  )
}
