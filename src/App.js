import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';
import Validation from './Validation/Validation';
import Radium from 'radium'

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
    this.setState({persons: lstPerson});
  }

  togglePersonHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    }
    let returnPersons = null;
    if (this.state.showPerson) {
      returnPersons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name} age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event)=> this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); 
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {returnPersons}
      </div>
    );
  }
}  
export default Radium(app);
