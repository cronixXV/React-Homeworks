import { useState, useEffect } from "react"

// Универсальный хук для дебаунсинга значений
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Очищаем таймер при размонтировании компонента или изменении значения/задержки
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
