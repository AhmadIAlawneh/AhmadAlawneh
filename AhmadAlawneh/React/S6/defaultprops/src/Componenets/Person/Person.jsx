import React, { Component } from 'react';

class Person extends Component {
static defaultProps = {
    name: 'Zeyad',
    eyeColor: 'deepblue',
    age: 35,
};

render() {
    const { name, eyeColor, age } = this.props;

    return (
    <div>
        <p>Name: {name}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Age: {age}</p>
        <hr />
    </div>
    );
}
}

export default Person;