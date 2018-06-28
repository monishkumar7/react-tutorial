import React from 'react';

const userOutput = (props) => {
    const paraStyle = {
        backgroundColor: '#eee',
        boxShadow: '0 2px 2px #ccc',
        padding: '10px 25px',
        margin: '20px auto',
        width: '50%'
    }

    return (
        <div style={paraStyle} >
            <p>First paragraph {props.username} </p>
            <p>Second paragraph</p>
        </div>
    )
};

export default userOutput;