import React from "react"
import MovieItem from "./MovieItem.jsx"

export default function MovieContainer({ movies }) {
  if (!movies || movies.length === 0) {
    return <div className="text-center mt-5">Нет данных для отображения</div>
  }

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col"
          >
            <div className="card h-100">
              <MovieItem movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
