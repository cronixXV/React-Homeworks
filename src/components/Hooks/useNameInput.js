import { useState } from "react"

export default function useNameInput(
  intialValue = "",
  name = "",
  required = false
) {
  const [value, setValue] = useState(intialValue)
  const [error, setError] = useState(null)

  return {
    id: name,
    name,
    value,
    error,
    onBlur: (e) => {
      setError(
        !e.target.value && required
          ? 'Поле "Ваше имя" обязательно для заполнения'
          : null
      )
    },
    onChange: (e) => setValue(e.target.value),
  }
}
