import React, { Component } from 'react'
import Input from '../components/Input';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { handleInput } from '../actions';

export class FormContainer extends Component {

//   handleTextArea(e) { 
//     let value = e.target.value; 
//     this.setState( prevState => ({ 
//       newUser: {...prevState.newUser, about: value} 
//     }), () => console.log(this.state.newUser.about)); 
//   }

//   handleCheckBox(e) {
//     // get new selection from user input
//     const newSelection = e.target.value;
//     let newSelectionArray;

//     if (this.state.newUser.skills.indexOf(newSelection) > -1) {
//       newSelectionArray = this.state.newUser.skills.filter(
//         s => s !== newSelection
//       );
//     } else {
//       newSelectionArray = [...this.state.newUser.skills, newSelection]
//     }

//     this.setState(prevState => ({
//       newUser: {...prevState.newUser, skills: newSelectionArray}
//     }));
//   }

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
            <Select 
                title={'Gender'}
                name={'gender'}
                placeholder={'Select Gender'}
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
        gender: state.newUser.gender,
        genderOptions: state.genderOptions
    }
}

export default connect(mapStateToProps)(FormContainer);