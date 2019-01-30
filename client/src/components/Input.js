
import React from 'react'
import {connect} from 'react-redux';
import { handleInput } from '../actions';

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            {' '}<br />
            <input 
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.inputType}
                // value={props.value}
                onChange={e => props.dispatch(handleInput(e))}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}

// function mapStateToProps(state) {
//     console.log(`State is ${state}`)
//     return {
//         value: state.newUser.name,
//     }
// }

export default connect()(Input);