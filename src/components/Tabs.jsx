import React from "react"
import { Link, useNavigate, useMatch } from "react-router-dom"
import { useLanguage } from "../Helpers/LanguageContext.jsx"

// Tab использует useMatch для определения активной вкладки.
const Tab = ({ to, children }) => {
  const match = useMatch(to)
  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`nav-link ${match ? "active" : ""}`}
        style={{ cursor: "pointer", fontSize: "16px", color: "#333" }}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Tabs({ toggleSidebar, isSidebarOpen }) {
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
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={handleHomeClick}
          style={{
            fontSize: "16px",
            backgroundColor: "#007bff",
            border: "none",
          }}
        >
          На главную
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={toggleSidebar}
          style={{
            fontSize: "16px",
            backgroundColor: "#007bff",
            border: "none",
          }}
        >
          {isSidebarOpen ? "Скрыть меню" : "Показать меню"}
        </button>
        <button
          className="btn btn-primary"
          onClick={handleLanguageChange}
          style={{
            fontSize: "16px",
            backgroundColor: "#007bff",
            border: "none",
          }}
        >
          {language === "ru" ? "Switch to English" : "Переключить на русский"}
        </button>
      </div>
      <ul
        className="nav nav-tabs"
        style={{ borderBottom: "2px solid #e0e0e0" }}
      >
        {/* Используем компонент Tab для определения активной вкладки. */}
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            to={tab.path}
          >
            {tab.label}
          </Tab>
        ))}
      </ul>
    </div>
  )
}
