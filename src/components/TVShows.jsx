import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieContainer from "./MovieContainer.jsx"
import styled from "styled-components"
import { fetchTvShows } from "./components/Reducers/Slices/tvShowsSlice"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

const TVShowsContainer = styled.div`
  margin: 20px;
`

const TVShowsTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const TVShows = () => {
  const dispatch = useDispatch()
  const { language } = useLanguage()
  const tvShows = useSelector((state) => state.tvShows.tvShowsList)
  const tvShowsStatus = useSelector((state) => state.tvShows.status)
  const tvShowsError = useSelector((state) => state.tvShows.error)

  useEffect(() => {
    dispatch(fetchTvShows(language))
  }, [dispatch, language])

  if (tvShowsStatus === "loading") {
    return <div>Загрузка...</div>
  }

  if (tvShowsStatus === "failed") {
    return <div>Ошибка: {tvShowsError}</div>
  }

  return (
    <TVShowsContainer>
      <TVShowsTitle>Популярные сериалы</TVShowsTitle>
      <MovieContainer movies={tvShows} />
    </TVShowsContainer>
  )
}

export default TVShows
