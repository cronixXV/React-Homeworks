import React, { useState, useEffect } from "react"
import Tabs from "./components/Tabs.jsx"
import { LanguageProvider, useLanguage } from "./helpers/LanguageContext.jsx"
import styled from "styled-components"

const API_KEY = process.env.REACT_APP_API_KEY

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`

const AppTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`

const App = () => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [error, setError] = useState(null)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=1`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        setError(error.message)
      }
    }

    const fetchTvShows = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setTvShows(data.results)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchMovies()
    fetchTvShows()
  }, [language])

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <AppContainer>
      <AppTitle>Фильмы и Сериалы</AppTitle>
      <Tabs
        movies={movies}
        tvShows={tvShows}
      />
    </AppContainer>
  )
}

const AppWithLanguageProvider = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
)

export default AppWithLanguageProvider
