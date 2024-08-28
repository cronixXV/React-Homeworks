import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main
      className="d-flex justify-content-center align-items-center w-100 vh-100 m-auto"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <div>
        <Outlet />
        <p className="mt-5 text-secondary">
          @ {new Date().getFullYear()}Сервис поиска фильмов и сериалов
        </p>
      </div>
    </main>
  )
}
