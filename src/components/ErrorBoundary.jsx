import React, { Component } from "react"
import PropTypes from "prop-types"

export default class ErrorBoundary extends Component {
  static defaultProps = {
    fallback: <div>Ошибка 500. Обновите страницу</div>,
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    fallback: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  url = `${process.env.REACT_APP_BASE_URL}/logs`

  constructor(properties) {
    super(properties)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.info(error)
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, info) {
    //axios
    // axios.get(`${this.url}?message=${error.message}`).then((result) => {
    //   if (result.data && result.data.length === 0) {
    //     axios.post(this.url, {
    //       message: error.message,
    //       stack: info,
    //       data: new Date(),
    //     })
    //   }
    // })

    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: error.message,
        stack: info.componentStack,
        data: new Date(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to log error")
        }
      })
      .catch((err) => {
        console.error("Error logging error:", err)
      })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
