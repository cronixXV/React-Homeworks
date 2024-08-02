import React from "react"

export default function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length)
  return movies[randomIndex]
}
