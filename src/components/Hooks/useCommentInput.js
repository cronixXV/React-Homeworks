import { useState } from "react"

export default function useCommentInput(initialValue = "", required = false) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  return {
    id: "comment",
    name: "comment",
    value,
    error,
    rows: 3,
    onBlur: (e) => {
      setError(
        !e.target.value && required
          ? 'Поле "Ваш рецензия" обязательно для заполнения'
          : null
      )
    },
    onChange: (e) => setValue(e.target.value),
  }
}
