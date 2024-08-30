import React from "react"
import { Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Container from "react-bootstrap/Container"

export default function AuthLayout() {
  const { t } = useTranslation()

  return (
    <main
      className="d-flex justify-content-center align-items-center w-100 vh-100 m-auto"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Outlet />
        <p className="mt-5 text-secondary">
          © {new Date().getFullYear()} {t("authLayout.footerText")}
        </p>
      </Container>
    </main>
  )
}
