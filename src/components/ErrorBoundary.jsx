import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Component failed', error, errorInfo);
    this.setState({
      hasError: true
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <span>Oops something went wrong :(</span>
    }

    return this.props.children
  }
}