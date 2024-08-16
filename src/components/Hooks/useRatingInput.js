import { useState } from "react"

export default function useRatingInput(initialValue = "", required = false) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  const options = [
    { value: "", label: "Выберите оценку" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ]

  return {
    id: "rating",
    name: "rating",
    options,
    value,
    error,
    onBlur: (e) => {
      setError(
        !e.target.value && required
          ? 'Поле "Ваша оценка" обязателен для заполнения'
          : null
      )
    },
    onChange: (e) => setValue(e.target.value),
  }
}
