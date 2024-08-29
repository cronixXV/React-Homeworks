import React, { useState, useEffect } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import { useFetchSearchMovie } from "./Hooks/useFetchSearchMovie.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Spinner, Alert } from "react-bootstrap"
import SearchMovie from "./SearchMovie.jsx"
import { useDebounce } from "./Hooks/useDebounce.js"
import { useTranslation } from "react-i18next"

const Movies = () => {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [searchMovie, setSearchMovie] = useState("")

  // Используем хук useDebounce для дебаунсинга значения searchMovie
  const debounceSearchMovie = useDebounce(searchMovie, 2000)

  // Хук для получения данных по поисковому запросу
  const {
    searchMovieList,
    status: searchStatus,
    error: searchError,
  } = useFetchSearchMovie(debounceSearchMovie)

  const [filteredMovies, setFilteredMovies] = useState([])
  const { t } = useTranslation()

  useEffect(() => {
    setFilteredMovies(moviesList)
  }, [moviesList])

  const handleSearch = (movie) => {
    setSearchMovie(movie)
  }

  const handleReset = () => {
    setSearchMovie("")
    setFilteredMovies(moviesList)
  }

  useEffect(() => {
    if (searchStatus === "succeeded") {
      setFilteredMovies(searchMovieList)
    }
  }, [searchStatus, searchMovieList])

  if (status === "loading" || searchStatus === "loading") {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner
          animation="border"
          role="status"
        >
          <span className="visually-hidden">{t("movies.loading")}</span>{" "}
        </Spinner>
      </Container>
    )
  }

  if (status === "failed") {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {t("movies.error")}: {error}
        </Alert>
      </Container>
    )
  }

  if (searchStatus === "failed") {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {t("movies.error")}: {searchError}
        </Alert>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "24px" }}
      >
        {t("movies.popular_movies")}
      </h1>
      <SearchMovie
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <MovieContainer movies={filteredMovies} />
    </Container>
  )
}

export default Movies
