import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
  
      // Error path
      return (
        <div>
          <h2>Something went wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
  
  
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 3) {
  
    
      throw new Error('Crashed!!!!');
    }
    return <button onClick={this.handleClick} style={{ display: "block" }}>{this.state.counter}</button>;
  }
}
  
function App() {
  return (
<div>
        <div>
          <h1>
            Error Boundry Sample
          </h1>
          <p>These two counters are inside the same error boundary. If one crashes, then the effect will be done on both as the error boundary will replace both of them.</p>
        </div>
        <ErrorBoundary >
          <p>These two counters are inside the same error boundary. If one crashes, then the other will not effected</p>
          <Counter />
          <Counter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><Counter /></ErrorBoundary>
        <ErrorBoundary><Counter /></ErrorBoundary>
      </div>
  );
}
  
export default App;