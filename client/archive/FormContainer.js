// import React, { Component } from 'react'
// import Input from '../src/components/Input';
// import Select from '../src/components/Select';
// import { connect } from 'react-redux';
// import { handleInput } from '../src/actions';

// export class FormContainer extends Component {

//   render() {
//     return (
//       <div className="">
//         <form>
//           <h1>this is it</h1>
//             <Input
//                 inputType={"text"}
//                 title={"Full Name"}
//                 name={"name"}
//                 placeholder={"Enter your name"}
//                 value={this.props.name}
//             />
//             <Input
//                 inputType={"email"}
//                 title={"Email"}
//                 name={"email"}
//                 placeholder={"darthVader@deathstar.com"}
//                 value={this.props.email}
//             />
//             <Select 
//                 title={'Gender'}
//                 name={'gender'}
//                 placeholder={'Select Gender'}
//             />
//           {/* <Checkbox 
//             title={"Skills"}
//             name={"skills"}
//             options={this.state.skillOptions}
//             selectedOptions={this.state.newUser.skills}
//             handleChange={(e) => this.handleCheckBox(e)}
//           /> */}
//         </form>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//     console.log(state);
//     return {
//         name: state.newUser.name,
//         email: state.newUser.email,
//         gender: state.newUser.gender,
//         genderOptions: state.genderOptions
//     }
// }

// export default connect(mapStateToProps)(FormContainer);