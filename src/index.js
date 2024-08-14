import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <ErrorBoundary
    fallback={<p style={{ color: "red" }}>Ошибка 500. Обновите страницу</p>}
  >
    <App />
  </ErrorBoundary>
)
