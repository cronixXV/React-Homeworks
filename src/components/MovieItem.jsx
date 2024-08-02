import React from "react"

export default function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.voteAverage}</p>
      <p>Количество отзывов: {movie.voteCount}</p>
      <p>{movie.overview}</p>
      <p>Дата выхода: {movie.releaseDate}</p>
    </div>
  )
}
