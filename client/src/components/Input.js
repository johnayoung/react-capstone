
import React from 'react'
import {connect} from 'react-redux';

function Input(props) {
    return (
        <div className="form-group">
            <input 
                {...props.input}
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                // onChange={e => props.dispatch(handleInput(e))}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}

export default connect()(Input);