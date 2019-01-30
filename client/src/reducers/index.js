import { HANDLE_INPUT } from "../actions";

const initialState = {
    newUser: {
      name: '',
      age: '',
      gender: '',
      skills: [],
      about: ''
    },
    
    skillOptions: ['React', 'React Native', 'Redux', 'Mongoose'],
    genderOptions: ["Male", "Female", "Others"]
}

// this.setState(
//   prevState => ({
//     newUser: {
//       ...prevState.newUser,
//       [name]: value
//     }
//   }), () => console.log(this.state.newUser)
// );

export const reducer = (state=initialState, action) => {
    let {name, value} = action;
    if (action.type === HANDLE_INPUT) {
        return Object.assign({}, state, {
            newUser: {
                ...state.newUser,
                [name]: value
            }
        })
    }

    return state;
}