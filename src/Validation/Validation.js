import React from 'react';

const validation = (props) => {
    let warn = ''
    if(props.value < 5){
        warn = 'Text too short';
    } else {
        warn = 'Text long enough';
    }

    return (
        <div>
            <p>{warn}</p>
        </div>
    )
};
export default validation;