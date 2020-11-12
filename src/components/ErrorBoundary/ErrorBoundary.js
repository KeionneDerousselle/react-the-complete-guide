import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    return this.state.hasError ?
      <div>
        <h1>Something went wrong!</h1>
        <p>{this.state.errorMessage}</p>
      </div> :
      this.props.children
  }
}

export default ErrorBoundary
