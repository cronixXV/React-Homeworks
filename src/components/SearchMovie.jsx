import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default function SearchMovie({ onSearch, onReset }) {
  const [movie, setMovie] = useState("")

  const handleChange = (e) => {
    setMovie(e.target.value)
  }

  const handleSearch = () => {
    onSearch(movie)
  }

  const handleReset = () => {
    setMovie("")
    onReset()
  }

  return (
    <Container className="py-4">
      <h1
        className="mb-4"
        style={{ fontSize: "22px" }}
      >
        Поиск фильмов по названию
      </h1>
      <Form>
        <Form.Group controlId="formSearch">
          <Form.Label>Введите название фильма</Form.Label>
          <Form.Control
            type="text"
            placeholder="Название фильма"
            value={movie}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className="mt-3"
          variant="primary"
          onClick={handleSearch}
        >
          Поиск
        </Button>
        <Button
          className="mt-3"
          variant="secondary"
          onClick={handleReset}
          style={{ marginLeft: "10px" }}
        >
          Сбросить поиск
        </Button>
      </Form>
    </Container>
  )
}
