import React from "react"
import MovieItem from "./MovieItem.jsx"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export default function MovieContainer({ movies }) {
  const { t } = useTranslation()

  if (!movies || movies.length === 0) {
    return <div>{t("movieContainer.no_data")}</div>
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
