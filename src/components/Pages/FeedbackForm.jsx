import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Form } from "react-router-dom"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
`

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const Textarea = styled.textarea`
  width: 96%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Input = styled.input`
  width: 96%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`

export default function FeedbackForm() {
  const [name, setName] = useState("")
  const [rating, setRating] = useState("")
  const [comment, setComment] = useState("")
  const [error, setError] = useState({})
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
    if (!name) newErrors.name = 'Поле "Ваше имя" обязательно для заполнения'
    if (!rating)
      newErrors.rating = 'Поле "Ваша оценка" обязательна для заполнения'
    if (!comment)
      newErrors.comment = 'Поле "Ваш рецензия" обязателен для заполнения'

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Container>
        <h2>Спасибо за ваш отзыв</h2>
        <p>Имя: {name}</p>
        <p>Оценка: {rating}</p>
        <p>Комментарий: {comment}</p>
      </Container>
    )
  }

  return (
    <Container>
      <h2>Оставьте свою оценку фильму или сериалу</h2>
      <Form
        action="/feedback"
        method="post"
        // onSubmit={(e) => {
        //   if (!confirm("Вы уверены?")) {
        //     e.preventDefault()
        //   }
        // }}
        onSubmit={handleOnSubmit}
      >
        <div>
          <Label htmlFor="name">Ваше имя</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && (
            <ErrorMessage style={{ color: "red" }}>{error.name}</ErrorMessage>
          )}
        </div>

        <div>
          <Label htmlFor="rating">Ваша оценка</Label>
          <Select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Выберите оценку</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          {error.rating && (
            <ErrorMessage style={{ color: "red" }}>{error.rating}</ErrorMessage>
          )}
        </div>

        <div>
          <Label htmlFor="comment">Ваша рецензия</Label>
          <Textarea
            id="comment"
            name="comment"
            value={comment}
            rows={3}
            onChange={(e) => setComment(e.target.value)}
          />
          {error.comment && (
            <ErrorMessage style={{ color: "red" }}>
              {error.comment}
            </ErrorMessage>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="submit">Отправить</Button>
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
