import React, { useState, useRef, useEffect } from "react"
import { Form, Button, Container } from "react-bootstrap"
import useInput from "../Hooks/useInput"
import { useTranslation } from "react-i18next"

const options = [
  { value: "", label: "Выберите оценку" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
]

export default function FeedbackForm() {
  const { t } = useTranslation()

  const name = useInput("", "name", true, {
    name: t("feedbackForm.errors.name"),
  })
  const rating = useInput("", "rating", true, {
    rating: t("feedbackForm.errors.rating"),
  })
  const comment = useInput("", "comment", true, {
    comment: t("feedbackForm.errors.comment"),
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
    if (!name.value) newErrors.name = t("feedbackForm.errors.name")
    if (!rating.value) newErrors.rating = t("feedbackForm.errors.rating")
    if (!comment.value) newErrors.comment = t("feedbackForm.errors.comment")

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
        <h2>{t("feedbackForm.thankYou")}</h2>
        <p>
          {t("feedbackForm.name")}: {name.value}
        </p>
        <p>
          {t("feedbackForm.rating")}: {rating.value}
        </p>
        <p>
          {t("feedbackForm.comment")}: {comment.value}
        </p>
      </Container>
    )
  }

  return (
    <Container className="mt-5">
      <h2>{t("feedbackForm.title")}</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={name.id}>{t("feedbackForm.name")}</Form.Label>
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
          <Form.Label htmlFor={rating.id}>
            {t("feedbackForm.rating")}
          </Form.Label>
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
                {t(`feedbackForm.ratingOptions.${option.value}`)}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.rating}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={comment.id}>
            {t("feedbackForm.comment")}
          </Form.Label>
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
            {t("feedbackForm.submit")}
          </Button>
        </div>
      </Form>
    </Container>
  )
}
