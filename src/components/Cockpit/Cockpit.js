import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {
    let buttonStyle = "button";
    if (props.showPersons) {
        buttonStyle = buttonStyle.concat(" red");
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={buttonStyle}
                onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
    )
};
export default cockpit;