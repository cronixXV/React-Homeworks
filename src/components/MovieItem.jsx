import React from "react"

export default function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>Рейтинг: {movie.popularity}</p>
      <p>Количество отзывов: {movie.vote_count}</p>
      <p>{movie.overview}</p>
      <p>Дата выхода: {movie.release_date}</p>
    </div>
  )
}
