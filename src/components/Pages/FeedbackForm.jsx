import React, { useState, useRef, useEffect } from "react"
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap"
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
      <Container className="mt-5">
        <h2>Спасибо за ваш отзыв</h2>
        <p>Имя: {name.value}</p>
        <p>Оценка: {rating.value}</p>
        <p>Комментарий: {comment.value}</p>
      </Container>
    )
  }

  return (
    <Container className="mt-5">
      <h2>Оставьте свою оценку фильму или сериалу</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={name.id}>Ваше имя</Form.Label>
          <Form.Control
            type="text"
            {...name}
            ref={nameRef}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={rating.id}>Ваша оценка</Form.Label>
          <Form.Control
            as="select"
            {...rating}
            isInvalid={!!errors.rating}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.rating}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={comment.id}>Ваша рецензия</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...comment}
            isInvalid={!!errors.comment}
          />
          <Form.Control.Feedback type="invalid">
            {errors.comment}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
          >
            Отправить
          </Button>
        </div>
      </Form>
    </Container>
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
