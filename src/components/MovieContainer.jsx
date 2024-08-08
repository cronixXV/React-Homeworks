import React from "react"
import MovieItem from "./MovieItem.jsx"

export default function MovieContainer({ movies }) {
  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  )
}
