import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class app extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Manu', age: 29 },
      { id: 'ghc', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    const person = persons[personIndex];

    person.name = event.target.value;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const lstPerson = this.state.persons.slice();
    lstPerson.splice(personIndex, 1);
    this.setState({ persons: lstPerson });
  }

  togglePersonHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  }

  render() {
    let returnPersons = null;
    let buttonStyle = "button";
    if (this.state.showPerson) {
      returnPersons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name} age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      buttonStyle = buttonStyle.concat(" red");
      console.log(buttonStyle)
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={buttonStyle}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {returnPersons}
      </div>
    );
  }
}
export default app;
