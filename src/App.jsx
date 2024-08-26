import React from "react"
import { RouterProvider } from "react-router-dom"
import createRouter from "./components/Routers/Routes.jsx"
import { LanguageProvider } from "./Helpers/LanguageContext.jsx"

const App = () => {
  return (
    <div>
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
