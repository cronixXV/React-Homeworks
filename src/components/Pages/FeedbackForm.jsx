import React, { useState, useRef, useEffect } from "react"
import { Form } from "react-router-dom"
import useInput from "../Hooks/useInput"

const options = [
  { value: "", label: "Выберите оценку" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
]

export default function FeedbackForm() {
  const name = useInput("", "name", true, {
    name: 'Поле "Ваше имя" обязательно для заполнения',
  })
  const rating = useInput("", "rating", true, {
    rating: 'Поле "Ваша оценка" обязательно для заполнения',
  })
  const comment = useInput("", "comment", true, {
    comment: 'Поле "Ваша рецензия" обязательно для заполнения',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef(null)

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus()
    }
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!name.value)
      newErrors.name = 'Поле "Ваше имя" обязательно для заполнения'
    if (!rating.value)
      newErrors.rating = 'Поле "Ваша оценка" обязательно для заполнения'
    if (!comment.value)
      newErrors.comment = 'Поле "Ваш рецензия" обязательно для заполнения'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  useEffect(() => {
    if (name.error)
      setErrors((prevErrors) => ({ ...prevErrors, name: name.error }))
    if (rating.error)
      setErrors((prevErrors) => ({ ...prevErrors, rating: rating.error }))
    if (comment.error)
      setErrors((prevErrors) => ({ ...prevErrors, comment: comment.error }))
  }, [name, rating, comment])

  if (submitted) {
    return (
      <div
        className="container mt-5"
        style={{
          maxWidth: "600px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Спасибо за ваш отзыв</h2>
        <p>Имя: {name.value}</p>
        <p>Оценка: {rating.value}</p>
        <p>Комментарий: {comment.value}</p>
      </div>
    )
  }

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "600px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
        }}
      >
        Оставьте свою оценку фильму или сериалу
      </h2>
      <Form
        action="/feedback"
        method="post"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3">
          <label
            htmlFor={name.id}
            className="form-label"
            style={{ fontSize: "20px" }}
          >
            Ваше имя
          </label>
          <input
            {...name}
            ref={nameRef}
            className="form-control"
            style={{ width: "96%", padding: "10px", borderRadius: "4px" }}
          />
          {errors.name && (
            <p
              className="text-danger"
              style={{ marginTop: "5px" }}
            >
              {errors.name}
            </p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor={rating.id}
            className="form-label"
            style={{ fontSize: "20px" }}
          >
            Ваша оценка
          </label>
          <select
            {...rating}
            className="form-select"
            style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.rating && (
            <p
              className="text-danger"
              style={{ marginTop: "5px" }}
            >
              {errors.rating}
            </p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor={comment.id}
            className="form-label"
            style={{ fontSize: "20px" }}
          >
            Ваша рецензия
          </label>
          <textarea
            {...comment}
            className="form-control"
            style={{
              width: "96%",
              padding: "10px",
              borderRadius: "4px",
              minHeight: "100px",
              resize: "vertical",
            }}
          />
          {errors.comment && (
            <p
              className="text-danger"
              style={{ marginTop: "5px" }}
            >
              {errors.comment}
            </p>
          )}
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Отправить
          </button>
        </div>
      </Form>
    </div>
  )
}

//action

// export const feedbackAction = async ({ request }) => {
//   const data = await request.formData()

//   const result = {
//     name: data.get("name"),
//     rating: data.get("rating"),
//     comment: data.get("comment"),
//   }

//   if (result.name.length < 3) {
//     return { error: "Ваша оценка недостаточно полная" }
//   }

//   return { isOk: true }
// }
