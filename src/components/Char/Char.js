import React from 'react';

const char = (props) => {
    const inlineStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #ccc'
    }

    return (
        <div onClick={props.click} style={inlineStyle}>
            <p>{props.char}</p>
        </div>
    );
}

export default char;