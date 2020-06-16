import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    if (this.state.showPerson) {
      returnPersons = <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed =  {this.nameChangedHandler}
            />
    }

    return (
      <div className="App">
        <Cockpit
          showPersons = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}
        />
        {returnPersons}
      </div>
    );
  }
}
export default app;
