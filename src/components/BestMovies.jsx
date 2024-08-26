import React, { useState, useEffect } from "react"
import { Card, Spinner } from "react-bootstrap"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import moment from "moment"

export default function BestMovies() {
  const { language } = useLanguage()
  const { moviesList, status, error } = useFetchMovies(language)
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    if (Array.isArray(moviesList) && moviesList.length > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * moviesList.length)
        setCurrentMovie(moviesList[randomIndex])
      }, 3000)

      return () => clearInterval(intervalId)
    }
  }, [moviesList])

  if (status === "loading") {
    return (
      <div className="text-center mt-5">
        <Spinner
          animation="border"
          variant="primary"
        />
        <p>Загрузка...</p>
      </div>
    )
  }

  if (status === "failed") {
    return <div className="text-center mt-5">Ошибка: {error}</div>
  }

  if (!Array.isArray(moviesList) || moviesList.length === 0) {
    return <div className="text-center mt-5">Нет данных для отображения</div>
  }

  if (!currentMovie) {
    return (
      <div className="text-center mt-5">
        <Spinner
          animation="border"
          variant="primary"
        />
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>{currentMovie.title || currentMovie.name}</Card.Title>
          <Card.Text>
            <strong>Рейтинг:</strong> {currentMovie.popularity}
          </Card.Text>
          <Card.Text>
            <strong>Количество отзывов:</strong> {currentMovie.vote_count}
          </Card.Text>
          <Card.Text>
            {currentMovie.overview.length > 100
              ? `${currentMovie.overview.slice(0, 100)}...`
              : currentMovie.overview}
          </Card.Text>
          <Card.Text>
            <strong>Дата выхода:</strong>{" "}
            {moment(
              currentMovie.release_date || currentMovie.first_air_date
            ).format("DD.MM.YYYY")}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
