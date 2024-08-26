import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar.jsx"
import Tabs from "../Tabs.jsx"
import { useMediaQuery } from "react-responsive"

export default function MainLayout({ movies, tvShows }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <h1
        className=" text-center"
        style={{
          fontSize: isMobile ? "20px" : "28px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Фильмы и Сериалы
      </h1>
      <div className={`d-flex ${isMobile ? "flex-column" : "flex-row"}`}>
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className="flex-grow-1"
          style={{
            marginLeft: isMobile ? "0" : isSidebarOpen ? "250px" : "0",
            padding: "20px",
            transition: "margin-left 0.3s ease-in-out",
            marginTop: isMobile ? (isSidebarOpen ? "250px" : "0") : "0",
          }}
        >
          <Tabs
            movies={movies}
            tvShows={tvShows}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <Outlet />
        </div>
      </div>
    </>
  )
}
