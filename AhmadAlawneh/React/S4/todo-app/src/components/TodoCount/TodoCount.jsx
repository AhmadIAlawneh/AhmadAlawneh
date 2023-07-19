import React from 'react';

class TodoCount extends React.Component {
render() {
    const { count } = this.props;
    return <div>Total Todos: {count}</div>;
}
}

export default TodoCount;