import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../Reducers/Slices/authSlice.js"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Alert } from "react-bootstrap"

export default function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, error, status } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    if (status === "succeeded" && isAuthenticated) {
      navigate("/")
    }
  }, [status, isAuthenticated, navigate])

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ maxWidth: "330px" }}
    >
      <div className="text-center">
        <h1 className="h3 mb-4 fw-normal">Форма авторизации</h1>
      </div>

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
        variant="success"
        size="lg"
        type="submit"
        className="w-100"
      >
        Войти
      </Button>
    </Form>
  )
}
