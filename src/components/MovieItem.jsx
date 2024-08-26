import React from "react"

export default function MovieItem({ movie }) {
  return (
    <div className="card-body d-flex flex-column">
      <h2
        className="card-title"
        style={{ fontSize: "18px", marginBottom: "10px", color: "#333" }}
      >
        {movie.title || movie.name}
      </h2>
      <p
        className="card-text"
        style={{ fontSize: "14px", color: "#666" }}
      >
        Рейтинг: {movie.popularity}
      </p>
      <p
        className="card-text"
        style={{ fontSize: "14px", color: "#666" }}
      >
        Количество отзывов: {movie.vote_count}
      </p>
      <p
        className="card-text"
        style={{ fontSize: "14px", color: "#666" }}
      >
        {movie.overview}
      </p>
      <p
        className="card-text"
        style={{ fontSize: "14px", color: "#666" }}
      >
        Дата выхода: {movie.release_date || movie.first_air_date}
      </p>
    </div>
  )
}
