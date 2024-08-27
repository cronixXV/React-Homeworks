import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Main() {
  return (
    <Container
      fluid
      className="p-5 mb-5 bg-light border rounded-3"
    >
      <h1 className="display-5 fw-bold">Сервис поиска фильмов и сериалов</h1>
      <p className="fs-4 ">
        С помощью данного сервиса вы можете быстро найти подходящие фильмы и
        сериалы.
      </p>
      <p className="fs-4 mb-4">
        Исследуйте наш каталог фильмов и сериалов, чтобы найти что-то интересное
        для себя.
      </p>
      <Link to="/movies">
        <Button
          size="lg"
          variant="outline-primary"
        >
          Перейти в раздел фильмы
        </Button>
      </Link>
    </Container>
  )
}
