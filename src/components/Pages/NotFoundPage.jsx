import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

export default function NotFoundPage() {
  const navigate = useNavigate()

  const [isNavigate, setIsNavigate] = useState(false)

  useEffect(() => {
    setIsNavigate(true)
    const timer = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [navigate])

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <Row>
        <Col>
          <h1 className="display-4 mb-3">404 - Страница не найдена</h1>
          <p className="lead text-muted">
            Извините, но страница, которую вы ищете, не существует.
          </p>
          {isNavigate && (
            <p className="text-muted">
              Вы будете перенаправлены на главную страницу через 5 секунд.
            </p>
          )}
        </Col>
      </Row>
    </Container>
  )
}
