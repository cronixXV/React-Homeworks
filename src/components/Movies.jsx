import React, { useState, useEffect } from "react"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import { useFetchSearchMovie } from "./Hooks/useFetchSearchMovie.js"
import MovieContainer from "./MovieContainer.jsx"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Container, Spinner, Alert } from "react-bootstrap"
import SearchMovie from "./SearchMovie.jsx"

const Movies = () => {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [searchMovie, setSearchMovie] = useState("")
  const [debounceSearchMovie, setDebounceSearchMovie] = useState("")
  const [timer, setTimer] = useState(null)
  // Хук для получения данных по поисковому запросу
  const {
    searchMovieList,
    status: searchStatus,
    error: searchError,
  } = useFetchSearchMovie(debounceSearchMovie)

  const [filteredMovies, setFilteredMovies] = useState([])

  // Реализация дебаунсинга
  useEffect(() => {
    // Если таймер уже существует, очищаем его
    if (timer) {
      clearTimeout(timer)
    }

    // Устанавливаем новый таймер на 2 секунды
    const newTimer = setTimeout(() => {
      setDebounceSearchMovie(searchMovie) // Обновляем поисковый запрос с задержкой
    }, 2000)

    // Сохраняем таймер для последующей очистки
    setTimer(newTimer)

    // Очищаем таймер при размонтировании компонента или изменении зависимости
    return () => {
      clearTimeout(newTimer)
    }
  }, [searchMovie]) // Запуск дебаунсинга при изменении `searchMovie`

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

  if (searchStatus === "failed") {
    return (
      <Container className="py-5">
        <Alert variant="danger">Ошибка: {searchError}</Alert>
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
      <SearchMovie
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <MovieContainer movies={filteredMovies} />
    </Container>
  )
}

export default Movies
