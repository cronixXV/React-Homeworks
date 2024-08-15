import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`

const NotFoundTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`

const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #666;
`

export default function NotFoundPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isNavigate, setIsNavigate] = useState(false)

  let timer
  useEffect(() => {
    setIsNavigate(true)
    timer = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [navigate])

  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Страница не найдена</NotFoundTitle>
      <NotFoundMessage>
        Извините, но страница, которую вы ищете, не существует.
      </NotFoundMessage>
      {isNavigate && (
        <NotFoundMessage>
          Вы будете перенаправлены на главную страницу через 5 секунд.
        </NotFoundMessage>
      )}
    </NotFoundContainer>
  )
}
