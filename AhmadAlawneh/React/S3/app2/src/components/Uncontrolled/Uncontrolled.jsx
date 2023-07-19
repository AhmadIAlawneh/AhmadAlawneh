import React, { Component } from 'react';

class Uncontrolled extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    alert(`Uncontrolled: User Name: ${username}, Password: ${password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label className="form-label">User Name:</label>
          <input type="text" name="username" className="form-input" />
        </div>
        <div className="form-row">
          <label className="form-label">Password:</label>
          <input type="password" name="password" className="form-input" />
        </div>
        <div className="form-row form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Uncontrolled;