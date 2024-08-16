import { useState } from "react"

export default function useInput(
  initialValue = "",
  name = "",
  required = false,
  options = [],
  errorMessages = {}
) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  return {
    id: name,
    name,
    value,
    error,
    options,
    onBlur: (e) => {
      setError(
        !e.target.value && required
          ? errorMessages[name] || "Все поля обязательны для заполнения"
          : null
      )
    },
    onChange: (e) => setValue(e.target.value),
  }
}
