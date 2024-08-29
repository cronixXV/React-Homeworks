import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
// import { useLanguage } from "../Helpers/LanguageContext.jsx"
import styled from "styled-components"

const Divider = styled.hr`
  color: white;
  width: 100%;
`

export default function Sidebar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  // const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <Navbar
      className="flex-column flex-shrink-0 p-3"
      bg="dark"
      variant="dark"
      style={{
        width: "100%",
        height: isMobile ? "auto" : "100vh",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="me-auto"
      >
        <span className="fs-5">{t("sidebar.movies_and_series")}</span>
      </Navbar.Brand>

      <Divider />
      <Nav
        className="flex-column mb-auto"
        defaultActiveKey="/"
        variant="pills"
        style={{
          width: "100%",
        }}
      >
        <Nav.Item>
          <Nav.Link
            className="text-light px-3"
            as={Link}
            to="/"
            eventKey="/"
          >
            {t("sidebar.home")}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/movies"
            eventKey="/movies"
            className="text-light px-3"
          >
            {t("sidebar.movies")}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/tv-shows"
            eventKey="/tv-shows"
            className="text-light px-3"
          >
            {t("sidebar.tv_shows")}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/random-movie"
            eventKey="/random-movie"
            className="text-light px-3"
          >
            {t("sidebar.random_movie")}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/best-movies"
            eventKey="/best-movies"
            className="text-light px-3"
          >
            {t("sidebar.best_movies")}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/feedback"
            eventKey="/feedback"
            className="text-light px-3"
          >
            {t("sidebar.feedback")}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Divider />

      <NavDropdown
        title={
          <strong>
            {isAuthenticated ? `${t("hello")}, ${user?.name} !` : t("guest")}
          </strong>
        }
        className="text-light"
        drop="up"
        menuVariant="dark"
        style={{
          width: "100%",
        }}
      >
        {isAuthenticated ? (
          <>
            <NavDropdown.Item
              as={Link}
              to="/profile"
            >
              {t("sidebar.my_profile")}
            </NavDropdown.Item>
            {/* <NavDropdown.Item
              as={Link}
              to="#"
              onClick={toggleLanguage}
              className="text-light px-3"
            >
              {language === "ru"
                ? t("sidebar.switch_to_english")
                : t("sidebar.switch_to_russian")}
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/settings"
            >
              {t("sidebar.settings")}
            </NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item
              as={Link}
              to="/auth/logout"
            >
              {t("sidebar.logout")}
            </NavDropdown.Item>
          </>
        ) : (
          <>
            <NavDropdown.Item
              as={Link}
              to="/login"
            >
              {t("sidebar.login")}
            </NavDropdown.Item>
            {/* <NavDropdown.Item
              as={Link}
              to="#"
              onClick={toggleLanguage}
              className="text-light px-3"
            >
              {language === "ru"
                ? t("sidebar.switch_to_english")
                : t("sidebar.switch_to_russian")}
            </NavDropdown.Item> */}
            <NavDropdown.Item
              as={Link}
              to="/settings"
            >
              {t("sidebar.settings")}
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Navbar>
  )
}
