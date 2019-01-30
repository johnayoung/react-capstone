import React from 'react'
import {connect} from 'react-redux';
import { handleInput } from '../actions';

export class Select extends React.Component {
    handleChange(e) {
        e.preventDefault();
        this.props.dispatch(handleInput(e));
      }

    render() {
        return (
          <div className="form-group">
              <label htmlFor={this.props.name}>{this.props.title}</label>
              <select
                  id={this.props.name}
                  name={this.props.name}
                  className="form-control"
                  onChange={(e) => this.handleChange(e)}
                  value={this.props.gender}
              >
                  <option value='' disabled>
                      {this.props.placeholder}
                  </option>
                  {this.props.options.map(option => {
                      return (
                          <option key={option} value={option} label={option}>
                              {option}
                          </option>
                      );
                  })}
              </select>
          </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(`State is ${state}`)
    return {
        value: state.newUser.gender,
        options: state.genderOptions
    }
}

export default connect(mapStateToProps)(Select);

