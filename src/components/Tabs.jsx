import React, { useState } from "react"
import Movies from "./Movies.jsx"
import TVShows from "./TVShows.jsx"
import RandomMovie from "./RandomMovie.jsx"
import styled from "styled-components"

const TabsContainer = styled.div`
  margin: 20px;
`

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  border-bottom: 2px solid #e0e0e0;
`

const TabItem = styled.li`
  margin-right: 10px;
`

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  border-bottom: ${(props) =>
    props["data-active"] ? "2px solid #007bff" : "2px solid transparent"};

  &:hover {
    border-bottom: 2px solid #007bff;
  }
`

const TabContent = styled.div`
  margin-top: 20px;
`

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("movies")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <TabsContainer>
      <TabList>
        <TabItem>
          <TabButton
            data-active={activeTab === "movies"}
            onClick={() => handleTabClick("movies")}
          >
            Фильмы
          </TabButton>
        </TabItem>
        <TabItem>
          <TabButton
            data-active={activeTab === "tvShows"}
            onClick={() => handleTabClick("tvShows")}
          >
            Сериалы
          </TabButton>
        </TabItem>
        <TabItem>
          <TabButton
            data-active={activeTab === "randomMovie"}
            onClick={() => handleTabClick("randomMovie")}
          >
            Случайный фильм
          </TabButton>
        </TabItem>
      </TabList>
      <TabContent>
        {activeTab === "movies" && <Movies />}
        {activeTab === "tvShows" && <TVShows />}
        {activeTab === "randomMovie" && <RandomMovie />}
      </TabContent>
    </TabsContainer>
  )
}
