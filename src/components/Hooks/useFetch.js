import { useState, useEffect } from "react"

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = async (url, options) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url) {
      getData(url, options)
    }
  }, [url, JSON.stringify(options)])

  return { data, loading, error, getData }
}
