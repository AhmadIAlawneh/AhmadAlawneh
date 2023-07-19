import React, { Component } from 'react';
import './controlled.css'
class Controlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`Controlled: User Name: ${username}, Password: ${password}`);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-input"
          />
        </div>
        <div className="form-row form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Controlled;