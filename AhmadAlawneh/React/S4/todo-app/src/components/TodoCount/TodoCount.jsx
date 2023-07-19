import React from 'react';

class TodoCount extends React.Component {
render() {
    const { count } = this.props;
    return <div>Total Tasks: {count}</div>;
}
}

export default TodoCount;