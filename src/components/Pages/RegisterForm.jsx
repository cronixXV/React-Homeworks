import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../Reducers/Slices/authSlice"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Alert } from "react-bootstrap"

export default function RegisterForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status, error } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ email, password, name }))
  }

  // Если регистрация успешна, перенаправляем на страницу входа
  if (status === "succeeded") {
    navigate("/auth")
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ maxWidth: "330px" }}
    >
      <div className="text-center">
        <h1 className="h3 mb-4 fw-normal">Регистрация</h1>
      </div>

      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          size="lg"
          placeholder="Имя"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="email"
          size="lg"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="password"
          size="lg"
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      {status === "failed" && error && <Alert variant="danger">{error}</Alert>}

      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="w-100"
      >
        Зарегистрироваться
      </Button>
    </Form>
  )
}
