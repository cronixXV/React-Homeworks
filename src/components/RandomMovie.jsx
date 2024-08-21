import React, { useState, useEffect } from "react"
import getRandomMovie from "../Helpers/getRandomMovie"
import styled from "styled-components"

const RandomMovieContainer = styled.div`
  margin: 20px;
`

const RandomMovieTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const RandomMovieOverview = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const RandomMovieReleaseDate = styled.p`
  font-size: 14px;
  color: #666;
`

const RandomMovieButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`

export default function RandomMovie({ movies }) {
  const [randomMovie, setRandomMovie] = useState(null)

  useEffect(() => {
    const fetchRandomMovie = () => {
      if (movies.length > 0) {
        const sortedMovies = [...movies].sort(
          (a, b) => b.vote_count - a.vote_count
        )
        setRandomMovie(getRandomMovie(sortedMovies))
      }
    }

    fetchRandomMovie()
  }, [movies])

  if (!randomMovie) {
    return <div>Загрузка...</div>
  }

  return (
    <RandomMovieContainer>
      <RandomMovieTitle>{randomMovie.title}</RandomMovieTitle>
      <RandomMovieOverview>{randomMovie.overview}</RandomMovieOverview>
      <RandomMovieReleaseDate>
        Дата выхода: {randomMovie.release_date}
      </RandomMovieReleaseDate>
      <RandomMovieButton onClick={() => setRandomMovie(getRandomMovie(movies))}>
        Показать другой случайный фильм
      </RandomMovieButton>
    </RandomMovieContainer>
  )
}
