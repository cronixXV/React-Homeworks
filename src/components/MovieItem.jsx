import React from "react"
import { Card } from "react-bootstrap"
import moment from "moment"

export default function MovieItem({ movie }) {
  return (
    <Card className="mb-4 shadow-sm h-100">
      <Card.Body>
        <Card.Title>{movie.title || movie.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Рейтинг: {movie.popularity}
        </Card.Subtitle>
        <Card.Text>
          <strong>Количество отзывов:</strong> {movie.vote_count}
        </Card.Text>
        <Card.Text>
          {movie.overview.length > 300
            ? `${movie.overview.slice(0, 100)}...`
            : movie.overview}
        </Card.Text>
        <Card.Text>
          <strong>Дата выхода:</strong>{" "}
          {moment(movie.release_date || movie.first_air_date).format(
            "DD.MM.YYYY"
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
