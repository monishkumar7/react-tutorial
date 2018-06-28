import React from 'react';

const validation= (props) => {
    let infoMessage = null;

    props.length === 0 ? infoMessage = (
        <p>No Text Entered</p>
    ) : props.length > 5 ? infoMessage = (
        <p>Text Length Sufficient</p>
    ) : infoMessage = (
        <p>Text Too Short</p>
    );

    return (
        <div>
            {infoMessage}
        </div>
    );
}

export default validation;
