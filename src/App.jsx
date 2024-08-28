import React from "react"
import { RouterProvider } from "react-router-dom"
import createRouter from "./components/Routers/Routes.jsx"
import { LanguageProvider } from "./Helpers/LanguageContext.jsx"

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={createRouter()}>
        <App />
      </RouterProvider>
    </LanguageProvider>
  )
}
