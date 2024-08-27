import React, { useState } from "react"
import { Container, Button } from "react-bootstrap"
import { DebouncedInput } from "./DebouncedInput.jsx"

export default function SearchMovie({ onSearch, onReset }) {
  const [movie, setMovie] = useState("")

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
      <DebouncedInput
        type="text"
        placeholder="Название фильма"
        value={movie}
        onChange={(e) => {
          setMovie(e) // Обновляем состояние
          onSearch(e) // Выполняем поиск
        }}
        className="form-control"
      />
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
    </Container>
  )
}
