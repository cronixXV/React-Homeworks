import React from "react"
import styled from "styled-components"

const MovieItemWrapper = styled.div`
  flex: 1 1 200px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  background-color: #fff;
`

const MovieTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`

const MovieRating = styled.p`
  font-size: 14px;
  color: #666;
`

const MovieReviews = styled.p`
  font-size: 14px;
  color: #666;
`

const MovieOverview = styled.p`
  font-size: 14px;
  color: #666;
`

const MovieReleaseDate = styled.p`
  font-size: 14px;
  color: #666;
`
const BackButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`

export default function MovieItem({ movie }) {
  return (
    <MovieItemWrapper>
      <MovieTitle>{movie.title || movie.name}</MovieTitle>
      <MovieRating>Рейтинг: {movie.popularity}</MovieRating>
      <MovieReviews>Количество отзывов: {movie.vote_count}</MovieReviews>
      <MovieOverview>{movie.overview}</MovieOverview>
      <MovieReleaseDate>
        Дата выхода: {movie.release_date || movie.first_air_date}
      </MovieReleaseDate>
    </MovieItemWrapper>
  )
}
