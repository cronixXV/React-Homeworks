import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export default function NotFoundPage() {
  const { t } = useTranslation()
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
          <h1 className="display-4 mb-3">{t("notFound.title")}</h1>
          <p className="lead text-muted">{t("notFound.message")}</p>
          {isNavigate && <p className="text-muted">{t("notFound.redirect")}</p>}
        </Col>
      </Row>
    </Container>
  )
}
