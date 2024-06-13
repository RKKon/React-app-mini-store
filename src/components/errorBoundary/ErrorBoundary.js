import { Component } from "react";
class ErrorBoundary extends Component {
  state = {
    error: false
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ error: true })
  }
  render() {
    if (this.state.error) {
      return <h2>Error! Probably happened an error with API, please try later</h2>
    }
    return this.props.children
  }

}

export default ErrorBoundary;