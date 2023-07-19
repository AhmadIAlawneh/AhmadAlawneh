import React from 'react';

class AddTodo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    newTodo: ''
    };
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
};

handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
};

render() {
    const { newTodo } = this.state;
    return (
    <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            value={newTodo}
            onChange={this.handleChange}
            placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
    </form>
    );
}
}

export default AddTodo;