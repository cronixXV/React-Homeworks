import React from "react"
import { Link, useNavigate, useMatch } from "react-router-dom"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Nav, Button, Container } from "react-bootstrap"

// Компонент для использования вкладок из react-router-dom
const Tab = ({ to, children }) => {
  const match = useMatch(to)
  return (
    <Nav.Link
      as={Link}
      to={to}
      className={`px-3 ${match ? "text-primary" : "text-dark"}`}
    >
      {children}
    </Nav.Link>
  )
}

export default function Tabs({ movies, tvShows }) {
  const navigate = useNavigate()
  const { language, toggleLanguage } = useLanguage()

  // Создаем массив tabs, который содержит информацию о каждой вкладке (путь и метка).
  const tabs = [
    { path: "/movies", label: "Фильмы" },
    { path: "/tv-shows", label: "Сериалы" },
    { path: "/random-movie", label: "Случайный фильм" },
    { path: "/best-movies", label: "Лучшие фильмы" },
    { path: "/feedback", label: "Обратная связь" },
  ]

  const handleLanguageChange = () => {
    toggleLanguage()
  }

  const handleHomeClick = () => {
    navigate("/")
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between mb-4">
        <Button
          variant="primary"
          onClick={handleHomeClick}
        >
          На главную
        </Button>
        <Button
          variant="primary"
          onClick={handleLanguageChange}
        >
          {language === "ru" ? "Switch to English" : "Переключить на русский"}
        </Button>
      </div>
      <Nav
        variant="tabs"
        defaultActiveKey="/movies"
        className="mb-3"
      >
        {tabs.map((tab) => (
          <Nav.Item key={tab.path}>
            <Tab to={tab.path}>{tab.label}</Tab>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  )
}
