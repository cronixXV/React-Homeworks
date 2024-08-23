import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { fetchMovies } from "../components/Reducers/Slices/moviesSlice"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const BestMoviesContainer = styled.div`
  margin: 20px;
`

const BestMovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

export default function BestMovies() {
  const dispatch = useDispatch()
  const { language } = useLanguage()
  const movies = useSelector((state) => state.movies.moviesList)
  const moviesStatus = useSelector((state) => state.movies.status)
  const moviesError = useSelector((state) => state.movies.error)
  const [currentMovie, setCurrentMovie] = useState(null)

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies(language))
    }
  }, [dispatch, language, moviesStatus])

  useEffect(() => {
    if (Array.isArray(movies) && movies.length > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movies.length)
        setCurrentMovie(movies[randomIndex])
      }, 3000)

      return () => clearInterval(intervalId)
    }
  }, [movies])

  if (moviesStatus === "loading") {
    return <div>Загрузка...</div>
  }

  if (moviesStatus === "failed") {
    return <div>Ошибка: {moviesError}</div>
  }

  if (!Array.isArray(movies) || movies.length === 0) {
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
