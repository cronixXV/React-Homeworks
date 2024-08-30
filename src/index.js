// index.js
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store.js"
import App from "./App.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import { LanguageProvider } from "./Helpers/LanguageContext.jsx"
import { RouterProvider } from "react-router-dom"
import createRouter from "./components/Routers/Routes.jsx"
import "./i18n.js"
import "bootstrap/dist/css/bootstrap.min.css"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <ErrorBoundary
    fallback={<p style={{ color: "red" }}>Ошибка 500. Обновите страницу</p>}
  >
    <Provider store={store}>
      <LanguageProvider>
        <RouterProvider router={createRouter()}>
          <App />
        </RouterProvider>
      </LanguageProvider>
    </Provider>
  </ErrorBoundary>
)
