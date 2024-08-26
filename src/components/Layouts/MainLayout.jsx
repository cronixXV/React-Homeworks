import React from "react"
import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Sidebar from "../Sidebar.jsx"

export default function MainLayout() {
  return (
    <div>
      <main>
        <Container fluid>
          <Row>
            <Col
              sm="12"
              md="4"
              lg="3"
              xxl="2"
              style={{ paddingLeft: 0 }}
            >
              <Sidebar />
            </Col>
            <Col
              sm="12"
              md="8"
              lg="9"
              xxl="10"
            >
              <div className="p-3">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <footer
        className="pt-3"
        style={{
          backgroundColor: "#e3e3e3",
        }}
      >
        <Container fluid>
          <Row>
            <Col>
              <p className="text-center">
                &copy; 2024 Сервис фильмов и сериалов
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
