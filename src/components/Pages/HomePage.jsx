// import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
// import styled from "styled-components"

// const MainContent = styled.div`
//   margin-top: 100px;
//   font-size: 24px;
//   color: #333;
//   text-align: center;
// `

// export default function HomePage() {
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <MainContent>Главная страница</MainContent>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Main() {
  return (
    <>
      <Container
        fluid
        className="p-5 mb-5 bg-light border rounded-3"
      >
        <h1 className="display-5 fw-bold">Сервис поиска фильмов и сериалов</h1>
        <p className="fs-4 mb-4">
          С помощью данного сервиса вы можете быстро найти подходящие фильмы и
          сериалы
          <br />
          Вам больше не нужно использовать дорогостоящие сервисы для такой
          простой задачи
        </p>
        <Link to="/movies">
          <Button
            size="lg"
            variant="outline-primary"
          >
            Перейти в раздел фильмы
          </Button>
        </Link>
      </Container>
    </>
  )
}
