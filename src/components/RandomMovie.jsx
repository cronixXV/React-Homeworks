import React, { useEffect, useState } from "react"
import { useFetchContent } from "./Hooks/useFetchСontent.js"
import getRandomMovie from "../Helpers/getRandomMovie"
import styled from "styled-components"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

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

export default function RandomMovie() {
  const { language } = useLanguage()
  const { contentList, status, error } = useFetchContent("movies", language)
  const [randomMovie, setRandomMovie] = useState(null)

  useEffect(() => {
    if (Array.isArray(contentList) && contentList.length > 0) {
      const sortedMovies = [...contentList].sort(
        (a, b) => b.vote_count - a.vote_count
      )
      setRandomMovie(getRandomMovie(sortedMovies))
    }
  }, [contentList])

  if (status === "loading") {
    return <div>Загрузка...</div>
  }

  if (status === "failed") {
    return <div>Ошибка: {error}</div>
  }

  if (!Array.isArray(contentList) || contentList.length === 0) {
    return <div>Нет данных для отображения</div>
  }

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
      <RandomMovieButton
        onClick={() => setRandomMovie(getRandomMovie(contentList))}
      >
        Показать другой случайный фильм
      </RandomMovieButton>
    </RandomMovieContainer>
  )
}
