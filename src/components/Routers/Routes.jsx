import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout.jsx"
import HomePage from "../Pages/HomePage.jsx"
import MoviesPage from "../Pages/MoviesPage.jsx"
import TVShowsPage from "../Pages/TVShowsPage.jsx"
import RandomMoviePage from "../RandomMovie.jsx"
import BestMoviesPage from "../BestMovies.jsx"
import NotFoundPage from "../Pages/NotFoundPage.jsx"
import FeedbackForm from "../Pages/FeedbackForm.jsx"
import ErrorBoundary from "../ErrorBoundary.jsx"

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
              <HomePage />
            </ErrorBoundary>
          ),
        },
        {
          path: "movies",
          element: <MoviesPage />,
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
  ])

export default createRouter
