import React from "react"
import { Link, useNavigate, useMatch } from "react-router-dom"
import styled from "styled-components"
import { useLanguage } from "../helpers/LanguageContext.jsx"

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
  padding: 10px 20px;
  margin-right: 10px;
`

const TabButton = styled(Link)`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.active ? "2px solid #007bff" : "2px solid transparent"};

  &:hover {
    border-bottom: 2px solid #007bff;
  }
`

const LanguageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: -50px;
  right: 20px;

  &:hover {
    background-color: #0056b3;
  }
`

const BackButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  top: 10px;
  left: 870px;

  &:hover {
    background-color: #0056b3;
  }
`

const TabsWrapper = styled.div`
  position: relative;
`

// Tab использует useMatch для определения активной вкладки.
const Tab = ({ to, children }) => {
  const match = useMatch(to)
  return (
    <TabButton
      to={to}
      active={match}
    >
      {children}
    </TabButton>
  )
}

export default function Tabs({ movies, tvShows }) {
  const navigate = useNavigate()
  const { language, toggleLanguage } = useLanguage()

  //Создаем массив tabs, который содержит информацию о каждой вкладке (путь и метка).
  const tabs = [
    { path: "/movies", label: "Фильмы" },
    { path: "/tv-shows", label: "Сериалы" },
    { path: "/random-movie", label: "Случайный фильм" },
    { path: "/best-movies", label: "Лучшие фильмы" },
  ]

  const handleLanguageChange = () => {
    toggleLanguage()
  }

  const handleBackClick = () => {
    navigate("/")
  }

  return (
    <TabsWrapper>
      <BackButton onClick={handleBackClick}>На главную</BackButton>
      <LanguageButton onClick={handleLanguageChange}>
        {language === "ru" ? "Switch to English" : "Переключить на русский"}
      </LanguageButton>
      <TabsContainer>
        <TabList>
          {/* Используем компонент Tab для определения активной вкладки. */}
          {tabs.map((tab) => (
            <TabItem key={tab.path}>
              <Tab to={tab.path}>{tab.label}</Tab>
            </TabItem>
          ))}
        </TabList>
      </TabsContainer>
    </TabsWrapper>
  )
}
