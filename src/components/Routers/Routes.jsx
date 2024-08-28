import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout.jsx"
import AuthLayout from "../Layouts/AuthLayout.jsx"
import HomePage from "../Pages/HomePage.jsx"
import MoviesPage from "../Pages/MoviesPage.jsx"
import TVShowsPage from "../Pages/TVShowsPage.jsx"
import RandomMoviePage from "../RandomMovie.jsx"
import BestMoviesPage from "../BestMovies.jsx"
import NotFoundPage from "../Pages/NotFoundPage.jsx"
import FeedbackForm from "../Pages/FeedbackForm.jsx"
import ErrorBoundary from "../ErrorBoundary.jsx"
import LoginForm from "../Pages/Loginform.jsx"
import Logout from "../Logout.jsx"
import PrivateRoute from "../PrivateRoute.jsx"
import RegisterForm from "../Pages/RegisterForm.jsx"

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ErrorBoundary>
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            </ErrorBoundary>
          ),
        },
        {
          path: "movies",
          element: (
            <PrivateRoute>
              <MoviesPage />
            </PrivateRoute>
          ),
        },
        {
          path: "tv-shows",
          element: <TVShowsPage />,
        },
        {
          path: "random-movie",
          element: <RandomMoviePage />,
        },
        {
          path: "best-movies",
          element: <BestMoviesPage />,
        },
        {
          path: "feedback",
          element: <FeedbackForm />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: (
            <ErrorBoundary>
              <LoginForm />
            </ErrorBoundary>
          ),
        },
        {
          path: "register", // Добавляем путь для регистрации
          element: (
            <ErrorBoundary>
              <RegisterForm />
            </ErrorBoundary>
          ),
        },
        {
          path: "logout",
          element: <Logout />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ])

export default createRouter
