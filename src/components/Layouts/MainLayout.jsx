import React from "react"
import { Outlet } from "react-router-dom"
import Tabs from "../Tabs.jsx"
import styled from "styled-components"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default function MainLayout({ movies, tvShows }) {
  return (
    <LayoutWrapper>
      <Tabs
        movies={movies}
        tvShows={tvShows}
      />
      <Outlet />
    </LayoutWrapper>
  )
}
