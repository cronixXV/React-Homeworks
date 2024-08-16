import { useState } from "react"

export default function useField({
  initialValue = "",
  name = "",
  required = false,
  errorMessages = {},
} = {}) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  const handleBlur = () => {
    if (required && !value) {
      setError(errorMessages[name] || "Поле обязательно для заполнения")
    } else {
      setError(null)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return {
    id: name,
    name,
    value,
    error,
    onBlur: handleBlur,
    onChange: handleChange,
  }
}
