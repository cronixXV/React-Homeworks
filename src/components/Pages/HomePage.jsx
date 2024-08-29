import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Main() {
  const { t } = useTranslation()

  return (
    <Container
      fluid
      className="p-5 mb-5 bg-light border rounded-3"
    >
      <h1 className="display-5 fw-bold">{t("main.title")}</h1>
      <p className="fs-4">{t("main.description")}</p>
      <p className="fs-4 mb-4">{t("main.explore")}</p>
      <Link to="/movies">
        <Button
          size="lg"
          variant="outline-primary"
        >
          {t("main.button")}
        </Button>
      </Link>
    </Container>
  )
}
