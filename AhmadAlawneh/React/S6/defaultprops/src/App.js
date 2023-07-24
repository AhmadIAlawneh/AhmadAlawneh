import React, { Component } from 'react';
import Person from './Componenets/Person/Person.jsx'; 

class App extends Component {
  render() {
    const customPersons = this.props.persons || [
      { name: "Person 1", eyeColor: "blue", age: "23" },
      { name: "Person 2", eyeColor: "blue", age: "35" },
      { name: "Person 3", eyeColor: "deepblue", age: "23" },
      { name: "Zeyad", eyeColor: "deepblue", age: "35" },
    ];

    return (
      <div>
        {customPersons.map((person, index) => (
          <Person
            name={person.name}
            eyeColor={person.eyeColor}
            age={person.age}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;