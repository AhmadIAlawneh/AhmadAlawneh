import React, { Component } from 'react';
import TodoCount from './components/TodoCount/TodoCount.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Task 1', 'Task 2', 'Task 3', 'Task 4']
    };
  }

  addTodo = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoCount count={todos.length} />
        <TodoList todos={todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
