import React, { useState } from "react"
import Movies from "./Movies.jsx"
import TVShows from "./TVShows.jsx"
import RandomMovie from "./RandomMovie.jsx"
import { useLanguage } from "../helpers/LanguageContext.jsx"
import styled from "styled-components"

const TabsContainer = styled.div`
  margin: 20px;
`

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  border-bottom: 2px solid #e0e0e0;
`

const TabItem = styled.li`
  margin-right: 10px;
`

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  border-bottom: ${(props) =>
    props["data-active"] ? "2px solid #007bff" : "2px solid transparent"};

  &:hover {
    border-bottom: 2px solid #007bff;
  }
`

const TabContent = styled.div`
  margin-top: 20px;
`

const LanguageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 50px;
  right: 20px;

  &:hover {
    background-color: #0056b3;
  }
`

const TabsWrapper = styled.div`
  position: relative;
`
export default function Tabs({ movies, tvShows }) {
  const [activeTab, setActiveTab] = useState("movies")
  const { language, setLanguage } = useLanguage()

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLanguageChange = () => {
    setLanguage(language === "ru" ? "en-US" : "ru")
  }

  return (
    <TabsWrapper>
      <LanguageButton onClick={handleLanguageChange}>
        {language === "ru" ? "Switch to English" : "Переключить на русский"}
      </LanguageButton>
      <TabsContainer>
        <TabList>
          <TabItem>
            <TabButton
              active={activeTab === "movies" ? "true" : "false"}
              onClick={() => handleTabClick("movies")}
            >
              Фильмы
            </TabButton>
          </TabItem>
          <TabItem>
            <TabButton
              active={activeTab === "tvShows" ? "true" : "false"}
              onClick={() => handleTabClick("tvShows")}
            >
              Сериалы
            </TabButton>
          </TabItem>
          <TabItem>
            <TabButton
              active={activeTab === "randomMovie" ? "true" : "false"}
              onClick={() => handleTabClick("randomMovie")}
            >
              Случайный фильм
            </TabButton>
          </TabItem>
        </TabList>
        <TabContent>
          {activeTab === "movies" && <Movies movies={movies} />}
          {activeTab === "tvShows" && <TVShows tvShows={tvShows} />}
          {activeTab === "randomMovie" && <RandomMovie movies={movies} />}
        </TabContent>
      </TabsContainer>
    </TabsWrapper>
  )
}
