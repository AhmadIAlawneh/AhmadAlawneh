import './App.css';
import React from 'react';
import Controlled from './components/controlled/controlled.jsx';
import Uncontrolled from './components/Uncontrolled/Uncontrolled.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="component-container">
          <Uncontrolled />
        </div>
        <div className="component-container">
          <Controlled />
        </div>
      </div>
    );
  }
}

export default App;