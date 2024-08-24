import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useFetchMovies } from "./Hooks/useFetchMovies.js"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const BestMoviesContainer = styled.div`
  margin: 20px;
`

const BestMovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

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
    return <div>Загрузка...</div>
  }

  if (status === "failed") {
    return <div>Ошибка: {error}</div>
  }

  if (!Array.isArray(moviesList) || moviesList.length === 0) {
    return <div>Нет данных для отображения</div>
  }

  if (!currentMovie) {
    return <div>Загрузка...</div>
  }

  return (
    <BestMoviesContainer>
      <BestMovieTitle>{currentMovie.title || currentMovie.name}</BestMovieTitle>
    </BestMoviesContainer>
  )
}
