import React, { Component } from 'react'
import Input from '../components/Input';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { handleInput } from '../actions';

export class FormContainer extends Component {

  render() {
    return (
      <div className="">
        <form>
          <h1>this is it</h1>
            <Input
                inputType={"text"}
                title={"Full Name"}
                name={"name"}
                placeholder={"Enter your name"}
                value={this.props.name}
            />
            <Input
                inputType={"email"}
                title={"Email"}
                name={"email"}
                placeholder={"darthVader@deathstar.com"}
                value={this.props.email}
            />
            <Input
                inputType={"password"}
                title={"Password"}
                name={"password"}
                placeholder={"At least 6 characters"}
                value={this.props.password}
            />
          {/* <Checkbox 
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={(e) => this.handleCheckBox(e)}
          /> */}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        name: state.newUser.name,
        email: state.newUser.email,
    }
}

export default connect(mapStateToProps)(FormContainer);