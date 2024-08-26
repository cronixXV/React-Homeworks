import React from "react"
import { RouterProvider } from "react-router-dom"
import createRouter from "./components/Routers/Routes.jsx"
import { LanguageProvider } from "./Helpers/LanguageContext.jsx"
import { useMediaQuery } from "react-responsive"

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div
      className="container mt-5"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: isMobile ? "10px" : "20px",
      }}
    >
      <RouterProvider router={createRouter()} />
    </div>
  )
}

const AppWithLanguageProvider = () => (
  <LanguageProvider>
    <App />
  </LanguageProvider>
)

export default AppWithLanguageProvider
