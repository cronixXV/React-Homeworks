import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"

const Divider = styled.hr`
  color: white;
  width: 100%;
`

export default function Sidebar({ isOpen }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <Navbar
      className="flex-column flex-shrink-0 p-3"
      bg="dark"
      variant="dark"
      style={{
        width: isMobile ? "100%" : "250px",
        height: isMobile ? "auto" : "100vh",
        position: isMobile ? "fixed" : "fixed",
        top: "0",
        left: isOpen ? "0" : isMobile ? "-100%" : "-250px",
        transition: "left 0.3s ease-in-out",
        zIndex: 1000,
        display: isMobile && !isOpen ? "none" : "block",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="me-auto"
      >
        <span className="fs-4">Фильмы и сериалы</span>
      </Navbar.Brand>

      <Divider />

      <Nav
        className="flex-column mb-auto"
        defaultActiveKey="/"
        variant="pills"
      >
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/"
            eventKey="/"
            className="text-light px-3"
          >
            Главная
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/movies"
            eventKey="/movies"
            className="text-light px-3"
          >
            Фильмы
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/tv-shows"
            eventKey="/tv-shows"
            className="text-light px-3"
          >
            Сериалы
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/random-movie"
            eventKey="/random-movie"
            className="text-light px-3"
          >
            Случайны фильм
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/best-movies"
            eventKey="/best-movies"
            className="text-light px-3"
          >
            Лучшие фильмы
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/feedback"
            eventKey="/feedback"
            className="text-light px-3"
          >
            Обратная связь
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Divider />

      <NavDropdown
        title={
          <>
            <strong>Гость</strong>
          </>
        }
        className="text-light"
        drop="up"
        menuVariant="dark"
        style={{
          width: "100%",
        }}
      >
        <NavDropdown.Item
          as={Link}
          to="#"
        >
          Мой профиль
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to="/settings"
        >
          Настройки
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          as={Link}
          to="#"
        >
          Выход
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}
