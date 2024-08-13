// src/components/BestMovies.jsx
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const BestMoviesContainer = styled.div`
  margin: 20px;
`

const BestMovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

export default function BestMovies({ movies }) {
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * movies.length)
      setCurrentMovie(movies[randomIndex])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [movies])

  if (!currentMovie) {
    return <div>Загрузка...</div>
  }

  return (
    <BestMoviesContainer>
      <BestMovieTitle>{currentMovie.title || currentMovie.name}</BestMovieTitle>
    </BestMoviesContainer>
  )
}
