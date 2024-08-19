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

const createRouter = (movies, tvShows) =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout
          movies={movies}
          tvShows={tvShows}
        />
      ),
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
          element: <MoviesPage movies={movies} />,
        },
        {
          path: "tv-shows",
          element: <TVShowsPage tvShows={tvShows} />,
        },
        {
          path: "random-movie",
          element: <RandomMoviePage movies={movies} />,
        },
        {
          path: "best-movies",
          element: <BestMoviesPage movies={movies} />,
        },
        {
          path: "feedback",
          element: <FeedbackForm />,
          // action: feedbackAction,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ])

export default createRouter
