import React from 'react';

class TodoList extends React.Component {
render() {
    const { todos } = this.props;
    return (
    <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
    </ul>
    );
}
}

export default TodoList;