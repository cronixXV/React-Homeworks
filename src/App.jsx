import React from "react"
import Tabs from "./components/Tabs.jsx"
import styled from "styled-components"

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`

const AppTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`

const App = () => {
  return (
    <AppContainer>
      <AppTitle>Фильмы и Сериалы</AppTitle>
      <Tabs />
    </AppContainer>
  )
}

export default App
