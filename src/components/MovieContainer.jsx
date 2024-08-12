import React from "react"
import MovieItem from "./MovieItem.jsx"
import styled from "styled-components"

const MovieContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`

export default function MovieContainer({ movies }) {
  return (
    <MovieContainerWrapper>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </MovieContainerWrapper>
  )
}
