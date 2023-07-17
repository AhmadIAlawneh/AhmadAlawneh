import React, { Component } from 'react';
import ButtonPanel from './componnents/ButtonPanel/ButtonPanel.js';
import Display from './componnents/Display/Display.js';
import './App.css';
import * as math from 'mathjs';

class App extends Component {
state = {
    displayValue: '',
};

handleButtonClick = (name) => {
    if (name === "=") {
    try {
    const result = math.evaluate(this.state.displayValue);
    this.setState({
        displayValue: result.toString(),
    });
    } catch (error) {
    this.setState({
        displayValue: "Error",
    });
    }
} else if (name === "AC") {
    this.setState({
        displayValue: "",
    });
} else {
    // Replace '*' with math.js multiplication operator
    const displayValue =
    name === "x" ? this.state.displayValue + "*" : this.state.displayValue + name;

    this.setState({
        displayValue,
    });
}
};

  render() {
    const { displayValue } = this.state;

    return (
      <div className="app">
        <Display value={displayValue} />
        <ButtonPanel clickHandler={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;