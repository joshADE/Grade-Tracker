import React from 'react'

function SaveChanges(props) {
    return (
        <input
            onClick={props.onSaveClick}
            style={buttonStyle}
            className="btn btn-save"
            type="button"
            value="Save the changes"
        />
    )
}
const buttonStyle = {
    borderRadius:'5px',
    border:'2px outset black',
    background: '#9cafb7',
    height: '100%',
    color: '#000',
};

export default SaveChanges;
