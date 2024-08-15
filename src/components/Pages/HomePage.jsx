import React from "react"
import styled from "styled-components"

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 24px;
  color: #333;
`

export default function HomePage() {
  return <Main>Главная страница</Main>
}
