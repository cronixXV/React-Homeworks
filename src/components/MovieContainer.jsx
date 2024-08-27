import React from "react"
import MovieItem from "./MovieItem.jsx"
import { Container, Row, Col } from "react-bootstrap"

export default function MovieContainer({ movies }) {
  if (!movies || movies.length === 0) {
    return <div>Нет данных для отображения</div>
  }

  return (
    <Container>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col
            key={movie.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
