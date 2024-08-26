import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

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
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <h1
        className="mb-4"
        style={{ fontSize: "32px", color: "#333" }}
      >
        404 - Страница не найдена
      </h1>
      <p
        className="mb-4"
        style={{ fontSize: "18px", color: "#666" }}
      >
        Извините, но страница, которую вы ищете, не существует.
      </p>
      {isNavigate && (
        <p
          className="mb-4"
          style={{ fontSize: "18px", color: "#666" }}
        >
          Вы будете перенаправлены на главную страницу через 5 секунд.
        </p>
      )}
    </div>
  )
}
