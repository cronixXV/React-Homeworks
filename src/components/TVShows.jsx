import React from "react"
import { useFetchContent } from "./Hooks/useFetchСontent.js"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const TVShowsContainer = styled.div`
  margin: 20px;
`

const TVShowsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const TVShows = () => {
  const { language } = useLanguage()
  const { contentList, status, error } = useFetchContent("tvShows", language)

  if (status === "loading") {
    return <div>Загрузка...</div>
  }

  if (status === "failed") {
    return <div>Ошибка: {error}</div>
  }

  return (
    <TVShowsContainer>
      <TVShowsTitle>Популярные сериалы</TVShowsTitle>
      <MovieContainer movies={contentList} />
    </TVShowsContainer>
  )
}

export default TVShows
